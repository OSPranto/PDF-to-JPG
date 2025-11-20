import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy - PDF to JPG Converter",
  description:
    "Read our privacy policy to understand how we protect your data and respect your privacy when using our PDF to JPG conversion service.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />

      <main className="lg:pl-72">
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Privacy Policy</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your privacy is important to us. This policy explains how we handle your data.
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <div className="bg-muted/50 p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground mb-2">Last updated: January 2025</p>
                <p className="font-medium">
                  We are committed to protecting your privacy and ensuring the security of your personal information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Files You Upload</h3>
                    <p className="text-muted-foreground">
                      When you use our PDF to JPG converter, you upload PDF files to our servers for processing. These
                      files are temporarily stored only for the duration of the conversion process.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Usage Data</h3>
                    <p className="text-muted-foreground">
                      We may collect anonymous usage statistics such as the number of conversions performed, file sizes,
                      and general usage patterns to improve our service.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Technical Information</h3>
                    <p className="text-muted-foreground">
                      We automatically collect certain technical information including your IP address, browser type,
                      and device information for security and performance purposes.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• To provide and maintain our PDF to JPG conversion service</li>
                  <li>• To process your files and deliver converted images</li>
                  <li>• To monitor and improve the performance of our service</li>
                  <li>• To detect and prevent fraud or abuse</li>
                  <li>• To comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">File Security</h3>
                    <p className="text-muted-foreground">
                      All file uploads and downloads are protected using SSL encryption. Your files are processed on
                      secure servers and are automatically deleted within 24 hours of upload.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">No Permanent Storage</h3>
                    <p className="text-muted-foreground">
                      We do not permanently store your uploaded files or converted images. All files are automatically
                      deleted from our servers after the conversion process is complete.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
                <p className="text-muted-foreground mb-4">We use minimal cookies and tracking technologies:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Essential cookies for website functionality</li>
                  <li>• Analytics cookies to understand usage patterns (anonymous)</li>
                  <li>• No third-party advertising cookies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
                <p className="text-muted-foreground">
                  We may use third-party services for analytics and performance monitoring. These services are carefully
                  selected and comply with strict privacy standards. We do not share your personal files with any third
                  parties.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Know what personal information we collect about you</li>
                  <li>• Request deletion of your personal information</li>
                  <li>• Opt out of non-essential cookies</li>
                  <li>• Contact us with privacy-related questions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-muted">
                  <p className="font-medium">Email: kinghasanbd1@gmail.com</p>
                  <p className="font-medium">Phone: +8801744298642</p>
                  <p className="font-medium">Address: Nilphamari, Rangpur City, Bangladesh</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any significant changes by
                  posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
