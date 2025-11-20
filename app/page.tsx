import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { PDFConverter } from "@/components/pdf-converter"
import { FeaturesSection } from "@/components/features-section"
import { ReviewsSection } from "@/components/reviews-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />

      <main className="lg:pl-72">
        {/* Hero Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 grid-pattern opacity-50" />
          <div className="relative container max-w-6xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 text-balance">
              Convert PDF to JPG
              <span className="block text-primary">Fast & Free</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Transform your PDF documents into high-quality JPG images instantly. No registration required, completely
              secure, and works on all devices.
            </p>
          </div>
        </section>

        {/* Converter Tool */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-4xl mx-auto">
            <PDFConverter />
          </div>
        </section>

        {/* Features */}
        <FeaturesSection />

        {/* How It Works */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">Convert your PDF to JPG in just three simple steps</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Upload PDF",
                  description: "Drag and drop your PDF file or click to browse and select it from your device",
                },
                {
                  step: "2",
                  title: "Convert",
                  description:
                    "Our tool automatically processes your PDF and converts each page to high-quality JPG images",
                },
                {
                  step: "3",
                  title: "Download",
                  description: "Download individual images or get all converted JPG files in a single click",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <ReviewsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
