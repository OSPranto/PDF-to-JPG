import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service - PDF to JPG Converter",
  description:
    "Read our terms of service to understand the rules and guidelines for using our PDF to JPG conversion service.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />

      <main className="lg:pl-72">
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Terms of Service</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Please read these terms carefully before using our PDF to JPG conversion service.
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <div className="bg-muted/50 p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground mb-2">Last updated: January 2025</p>
                <p className="font-medium">
                  By using our service, you agree to be bound by these terms and conditions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using the PDF to JPG converter service ("Service"), you accept and agree to be bound
                  by the terms and provision of this agreement. If you do not agree to abide by the above, please do not
                  use this service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Use License</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Permission is granted to temporarily use our PDF to JPG conversion service for personal and
                    commercial purposes. This is the grant of a license, not a transfer of title, and under this license
                    you may:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Convert PDF files to JPG images for legitimate purposes</li>
                    <li>• Use the service for personal and commercial projects</li>
                    <li>• Access the service from multiple devices</li>
                  </ul>

                  <p className="text-muted-foreground">
                    This license shall automatically terminate if you violate any of these restrictions.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Prohibited Uses</h2>
                <p className="text-muted-foreground mb-4">You may not use our service:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• To upload or convert copyrighted material without proper authorization</li>
                  <li>• To process illegal, harmful, or offensive content</li>
                  <li>• To attempt to reverse engineer or compromise our systems</li>
                  <li>• To overload our servers with excessive requests</li>
                  <li>• To violate any applicable laws or regulations</li>
                  <li>• To upload malicious files or viruses</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Service Availability</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Uptime</h3>
                    <p className="text-muted-foreground">
                      While we strive to maintain 99.9% uptime, we do not guarantee uninterrupted access to our service.
                      Maintenance, updates, or technical issues may temporarily affect availability.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">File Limitations</h3>
                    <p className="text-muted-foreground">
                      Our service has a maximum file size limit of 50MB per PDF. Files exceeding this limit will not be
                      processed.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Privacy and Data</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">File Processing</h3>
                    <p className="text-muted-foreground">
                      Files uploaded to our service are processed on secure servers and automatically deleted within 24
                      hours. We do not permanently store your files.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Data Protection</h3>
                    <p className="text-muted-foreground">
                      We implement appropriate security measures to protect your data during processing. However, no
                      method of transmission over the internet is 100% secure.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
                <p className="text-muted-foreground">
                  The information on this website is provided on an "as is" basis. To the fullest extent permitted by
                  law, this Company excludes all representations, warranties, conditions and terms whether express or
                  implied, statutory or otherwise.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Limitations</h2>
                <p className="text-muted-foreground">
                  In no event shall PDF to JPG or its suppliers be liable for any damages (including, without
                  limitation, damages for loss of data or profit, or due to business interruption) arising out of the
                  use or inability to use our service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Accuracy of Materials</h2>
                <p className="text-muted-foreground">
                  The materials appearing on our service could include technical, typographical, or photographic errors.
                  We do not warrant that any of the materials on our service are accurate, complete, or current.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Modifications</h2>
                <p className="text-muted-foreground">
                  We may revise these terms of service at any time without notice. By using our service, you are
                  agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
                <p className="text-muted-foreground">
                  These terms and conditions are governed by and construed in accordance with the laws of Bangladesh and
                  you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-muted">
                  <p className="font-medium">Email: kinghasanbd1@gmail.com</p>
                  <p className="font-medium">Phone: +8801744298642</p>
                  <p className="font-medium">Address: Nilphamari, Rangpur City, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
