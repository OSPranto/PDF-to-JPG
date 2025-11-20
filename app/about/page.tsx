import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About Us - PDF to JPG Converter",
  description:
    "Learn about our mission to provide the best PDF to JPG conversion tool. Fast, secure, and reliable document conversion for everyone.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />

      <main className="lg:pl-72">
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">About PDF to JPG</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're dedicated to providing the fastest and most reliable PDF to JPG conversion service
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-muted/50 p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At PDF to JPG, we believe that converting documents should be simple, fast, and secure. Our mission is
                  to provide everyone with access to professional-grade PDF conversion tools without the need for
                  expensive software or complicated installations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Why We Started</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We noticed that many existing PDF conversion tools were either too expensive, required software
                    installation, or compromised on quality. We set out to create a solution that addresses all these
                    pain points.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">What Makes Us Different</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our tool is completely free, works in your browser, maintains the highest quality, and respects your
                    privacy. We don't store your files, require registration, or limit your usage.
                  </p>
                </div>
              </div>

              <div className="bg-background border p-8 mb-12">
                <h2 className="text-2xl font-bold mb-6">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Privacy First</h3>
                    <p className="text-sm text-muted-foreground">Your files are never stored or shared</p>
                  </div>

                  <div className="text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Lightning Fast</h3>
                    <p className="text-sm text-muted-foreground">Optimized for speed and efficiency</p>
                  </div>

                  <div className="text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">High Quality</h3>
                    <p className="text-sm text-muted-foreground">Professional results every time</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Join Millions of Users</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Over 2 million users trust our PDF to JPG converter for their document conversion needs. Join them
                  today and experience the difference.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">2M+</div>
                    <div className="text-sm text-muted-foreground">Happy Users</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">10M+</div>
                    <div className="text-sm text-muted-foreground">Files Converted</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
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
