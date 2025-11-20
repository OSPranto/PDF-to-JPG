"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"

declare global {
  interface Window {
    pdfjsLib: any
    JSZip: any
  }
}

type ConversionState = "idle" | "uploading" | "processing" | "completed" | "error" | "loading"

interface ConvertedImage {
  dataUrl: string
  pageNumber: number
  width: number
  height: number
  name: string
}

export function PDFConverter() {
  const [state, setState] = React.useState<ConversionState>("loading")
  const [progress, setProgress] = React.useState(0)
  const [dragActive, setDragActive] = React.useState(false)
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null)
  const [convertedImages, setConvertedImages] = React.useState<ConvertedImage[]>([])
  const [error, setError] = React.useState<string>("")
  const [librariesLoaded, setLibrariesLoaded] = React.useState(false)
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    const loadScript = (src: string, globalName: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Check if already loaded
        if (typeof window !== "undefined" && (window as any)[globalName]) {
          resolve()
          return
        }

        // Check if script already exists
        const existingScript = document.querySelector(`script[src="${src}"]`)
        if (existingScript) {
          existingScript.addEventListener("load", () => resolve())
          existingScript.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)))
          return
        }

        const script = document.createElement("script")
        script.src = src
        script.async = true

        script.onload = () => {
          console.log(`[v0] Successfully loaded ${globalName}`)
          resolve()
        }

        script.onerror = () => {
          console.error(`[v0] Failed to load script: ${src}`)
          reject(new Error(`Failed to load ${src}`))
        }

        document.head.appendChild(script)
      })
    }

    const initializeLibraries = async () => {
      try {
        console.log("[v0] Starting to load PDF.js and JSZip libraries...")

        // Load PDF.js
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.min.js", "pdfjsLib")

        // Load JSZip
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/jszip/3.7.1/jszip.min.js", "JSZip")

        // Verify libraries are available
        if (typeof window !== "undefined" && window.pdfjsLib && window.JSZip) {
          console.log("[v0] PDF.js and JSZip libraries loaded successfully")

          // Configure PDF.js worker
          window.pdfjsLib.GlobalWorkerOptions.workerSrc =
            "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js"

          console.log("[v0] PDF.js initialized with CDN worker")
          setLibrariesLoaded(true)
          setState("idle")
        } else {
          throw new Error("Libraries loaded but not available on window object")
        }
      } catch (err) {
        console.error("[v0] Failed to load PDF.js libraries:", err)
        setError("Failed to load PDF processing libraries. Please check your internet connection and refresh the page.")
        setState("error")
      }
    }

    initializeLibraries()
  }, [])

  const convertPDFToImages = async (file: File): Promise<ConvertedImage[]> => {
    try {
      console.log("[v0] Starting client-side PDF conversion for file:", file.name)

      if (!window.pdfjsLib || !librariesLoaded) {
        throw new Error("PDF processing libraries are still loading. Please wait a moment and try again.")
      }

      const arrayBuffer = await file.arrayBuffer()

      const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise
      console.log("[v0] PDF loaded successfully, pages:", pdf.numPages)

      const images: ConvertedImage[] = []

      const batchSize = 5 // Process 5 pages at a time to avoid memory issues

      for (let batchStart = 1; batchStart <= pdf.numPages; batchStart += batchSize) {
        const batchEnd = Math.min(batchStart + batchSize - 1, pdf.numPages)

        for (let pageNum = batchStart; pageNum <= batchEnd; pageNum++) {
          console.log("[v0] Processing page", pageNum)

          setProgress((pageNum / pdf.numPages) * 90)

          const page = await pdf.getPage(pageNum)
          const viewport = page.getViewport({ scale: 2.0 })

          const canvas = document.createElement("canvas")
          const context = canvas.getContext("2d")

          if (!context) {
            throw new Error("Could not get canvas context")
          }

          canvas.height = viewport.height
          canvas.width = viewport.width

          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          }

          await page.render(renderContext).promise

          const dataUrl = canvas.toDataURL("image/jpeg", 0.95)

          images.push({
            dataUrl,
            pageNumber: pageNum,
            width: Math.round(viewport.width),
            height: Math.round(viewport.height),
            name: `page-${pageNum}.jpg`,
          })

          console.log("[v0] Page", pageNum, "converted successfully")
        }

        if (batchEnd < pdf.numPages) {
          await new Promise((resolve) => setTimeout(resolve, 100))
        }
      }

      console.log("[v0] All pages converted successfully")
      return images
    } catch (err) {
      console.error("[v0] PDF conversion error:", err)
      throw err
    }
  }

  const handleDrag = React.useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleDrop = React.useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (file.type === "application/pdf") {
        setSelectedFile(file)
        handleConversion(file)
      } else {
        setError("Please select a valid PDF file")
        setState("error")
      }
    }
  }, [])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (file.type === "application/pdf") {
        setSelectedFile(file)
        handleConversion(file)
      } else {
        setError("Please select a valid PDF file")
        setState("error")
      }
    }
  }

  const handleConversion = async (file: File) => {
    try {
      console.log("[v0] Starting conversion process for:", file.name)
      setState("uploading")
      setProgress(0)
      setError("")
      setConvertedImages([]) // Clear previous results

      await new Promise((resolve) => {
        const uploadInterval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) {
              clearInterval(uploadInterval)
              resolve(true)
              return 100
            }
            return prev + 50
          })
        }, 100)
      })

      setState("processing")
      setProgress(0)

      const images = await convertPDFToImages(file)

      if (images && images.length > 0) {
        setConvertedImages(images)
        setState("completed")
        setProgress(100)
        console.log("[v0] Conversion completed successfully")
      } else {
        throw new Error("No images were generated from the PDF")
      }
    } catch (err) {
      console.error("[v0] Conversion error:", err)
      let errorMessage = "Failed to convert PDF. Please try again with a different file."

      if (err instanceof Error) {
        errorMessage = err.message
      }

      setError(errorMessage)
      setState("error")
      setConvertedImages([]) // Clear any partial results on error
    }
  }

  const handleReset = () => {
    setState("idle")
    setProgress(0)
    setSelectedFile(null)
    setConvertedImages([])
    setError("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleDownload = (image: ConvertedImage, index: number) => {
    try {
      console.log("[v0] Downloading page", image.pageNumber)
      const link = document.createElement("a")
      link.href = image.dataUrl
      link.download = `page-${image.pageNumber}.jpg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      console.log("[v0] Download initiated for page", image.pageNumber)
    } catch (err) {
      console.error("[v0] Download error:", err)
    }
  }

  const handleDownloadAll = () => {
    console.log("[v0] Starting bulk download of", convertedImages.length, "images")

    if (window.JSZip && convertedImages.length > 1) {
      const zip = new window.JSZip()

      convertedImages.forEach((image) => {
        // Convert data URL to blob
        const base64Data = image.dataUrl.split(",")[1]
        zip.file(`page-${image.pageNumber}.jpg`, base64Data, { base64: true })
      })

      zip.generateAsync({ type: "blob" }).then((content: Blob) => {
        const link = document.createElement("a")
        link.href = URL.createObjectURL(content)
        link.download = `${selectedFile?.name?.replace(".pdf", "") || "converted"}-pages.zip`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(link.href)
        console.log("[v0] ZIP download completed")
      })
    } else {
      // Fallback to individual downloads
      convertedImages.forEach((image, index) => {
        setTimeout(() => handleDownload(image, index), index * 100)
      })
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 animate-fade-in">
      <Card className="border-2 border-dashed transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
        <CardContent className="p-4 sm:p-8">
          {state === "loading" && (
            <div className="flex flex-col items-center justify-center space-y-4 py-8 sm:py-12 animate-scale-in">
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center bg-primary/10 animate-float">
                <Icons.upload className="h-8 w-8 sm:h-10 sm:w-10 text-primary animate-pulse-custom" />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold">Loading PDF Converter...</h3>
                <p className="text-sm text-muted-foreground">
                  Please wait while we initialize the PDF processing libraries
                </p>
              </div>
            </div>
          )}

          {state === "idle" && (
            <div
              className={cn(
                "relative flex flex-col items-center justify-center space-y-4 py-8 sm:py-12 transition-all duration-300 animate-scale-in",
                dragActive && "bg-primary/5 scale-105",
              )}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div
                className={cn(
                  "flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center bg-primary/10 transition-all duration-300",
                  dragActive && "animate-float",
                )}
              >
                <Icons.upload className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold">Drop your PDF file here</h3>
                <p className="text-sm text-muted-foreground">or click to browse and select a file</p>
              </div>
              <Button
                onClick={() => fileInputRef.current?.click()}
                className="mt-4 transition-all duration-300 hover:scale-105"
                size="lg"
              >
                Choose PDF File
              </Button>
              <input ref={fileInputRef} type="file" accept=".pdf" onChange={handleFileSelect} className="hidden" />
              <p className="text-xs text-muted-foreground">Maximum file size: 50MB</p>
            </div>
          )}

          {(state === "uploading" || state === "processing") && (
            <div className="flex flex-col items-center justify-center space-y-6 py-8 sm:py-12 animate-scale-in">
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center bg-primary/10 animate-float">
                <Icons.upload className="h-8 w-8 sm:h-10 sm:w-10 text-primary animate-pulse-custom" />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold">
                  {state === "uploading" ? "Loading PDF..." : "Converting to JPG Images..."}
                </h3>
                <p className="text-sm text-muted-foreground break-all px-4">{selectedFile?.name}</p>
              </div>
              <div className="w-full max-w-md space-y-2 px-4">
                <Progress value={progress} className="h-2" />
                <p className="text-xs text-center text-muted-foreground">{Math.round(progress)}% complete</p>
              </div>
            </div>
          )}

          {state === "completed" && (
            <div className="flex flex-col items-center justify-center space-y-6 py-8 animate-scale-in">
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center bg-green-100 dark:bg-green-900/20 animate-float">
                <svg
                  className="h-8 w-8 sm:h-10 sm:w-10 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold text-green-600 dark:text-green-400">
                  Conversion Completed!
                </h3>
                <p className="text-sm text-muted-foreground px-4">
                  Your PDF has been successfully converted to {convertedImages.length} high-quality JPG image
                  {convertedImages.length > 1 ? "s" : ""}
                </p>
              </div>
            </div>
          )}

          {state === "error" && (
            <div className="flex flex-col items-center justify-center space-y-6 py-8 animate-scale-in">
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center bg-red-100 dark:bg-red-900/20">
                <svg
                  className="h-8 w-8 sm:h-10 sm:w-10 text-red-600 dark:text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold text-red-600 dark:text-red-400">Conversion Failed</h3>
                <p className="text-sm text-muted-foreground px-4">{error}</p>
              </div>
              <Button onClick={handleReset} variant="outline">
                Try Again
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {state === "completed" && convertedImages.length > 0 && (
        <Card className="animate-slide-in-bottom">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
              <div>
                <h3 className="text-lg font-semibold">Converted JPG Images</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {convertedImages.length} page{convertedImages.length > 1 ? "s" : ""} converted successfully
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <Button
                  onClick={handleDownloadAll}
                  className="flex items-center gap-2 justify-center border-red-500 border text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 bg-transparent"
                >
                  <Icons.download className="h-4 w-4" />
                  Download All ({convertedImages.length})
                </Button>
                <Button variant="outline" onClick={handleReset} className="justify-center bg-transparent">
                  Convert Another PDF
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {convertedImages.map((image, index) => (
                <div key={index} className={cn("space-y-3 animate-slide-in-bottom", `stagger-${index + 1}`)}>
                  <div className="relative aspect-[3/4] overflow-hidden border bg-muted transition-all duration-300 hover:shadow-lg group">
                    <img
                      src={image.dataUrl || "/placeholder.svg"}
                      alt={`Converted page ${image.pageNumber}`}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="text-white text-center">
                        <p className="text-sm font-medium">Page {image.pageNumber}</p>
                        <p className="text-xs">
                          {image.width} × {image.height}px
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium">Page {image.pageNumber}</span>
                      <p className="text-xs text-muted-foreground">
                        {image.width} × {image.height}px
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDownload(image, index)}
                      className="flex items-center gap-1 transition-all duration-300 hover:scale-105 border-red-500 border text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20"
                    >
                      <Icons.download className="h-3 w-3" />
                      <span className="hidden sm:inline">Download</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-muted/50 border border-dashed">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-sm text-muted-foreground">
                  <p>
                    <strong>File:</strong> {selectedFile?.name}
                  </p>
                  <p>
                    <strong>Size:</strong> {selectedFile ? (selectedFile.size / 1024 / 1024).toFixed(2) : "0"} MB
                  </p>
                  <p>
                    <strong>Pages:</strong> {convertedImages.length}
                  </p>
                </div>
                <div className="text-sm text-muted-foreground text-right">
                  <p>Conversion completed in high quality</p>
                  <p>Ready for download as JPG</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
