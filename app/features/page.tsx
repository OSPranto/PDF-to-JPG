import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Features - PDF to JPG Converter",
  description:
    "Discover all the powerful features of our PDF to JPG converter. Fast, secure, and high-quality conversion with no registration required.",
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />

      <main className="lg:pl-72">
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Powerful Features</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to convert PDF files to high-quality JPG images quickly and securely
              </p>
            </div>
          </div>
        </section>

        <FeaturesSection />

        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Technical Specifications</h2>
              <p className="text-lg text-muted-foreground">Advanced capabilities for professional results</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background p-6 border">
                <h3 className="text-lg font-semibold mb-4">File Support</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Maximum file size: 50MB</li>
                  <li>• Supports all PDF versions</li>
                  <li>• Password-protected PDFs</li>
                  <li>• Multi-page documents</li>
                  <li>• Vector and raster content</li>
                </ul>
              </div>

              <div className="bg-background p-6 border">
                <h3 className="text-lg font-semibold mb-4">Output Quality</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• High-resolution JPG output</li>
                  <li>• Customizable DPI settings</li>
                  <li>• Color profile preservation</li>
                  <li>• Lossless conversion option</li>
                  <li>• Batch processing support</li>
                </ul>
              </div>

              <div className="bg-background p-6 border">
                <h3 className="text-lg font-semibold mb-4">Security</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• SSL encrypted file transfer</li>
                  <li>• Automatic file deletion</li>
                  <li>• No data storage</li>
                  <li>• Privacy-first approach</li>
                  <li>• GDPR compliant</li>
                </ul>
              </div>

              <div className="bg-background p-6 border">
                <h3 className="text-lg font-semibold mb-4">Performance</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Lightning-fast processing</li>
                  <li>• Cloud-based conversion</li>
                  <li>• 99.9% uptime guarantee</li>
                  <li>• Global CDN delivery</li>
                  <li>• Mobile optimized</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
