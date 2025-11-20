import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { ReviewsSection } from "@/components/reviews-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "User Reviews - PDF to JPG Converter",
  description:
    "Read what our users say about our PDF to JPG converter. Over 12,000 five-star reviews from satisfied customers worldwide.",
}

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />

      <main className="lg:pl-72">
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">User Reviews</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Don't just take our word for it. See what thousands of users say about our PDF to JPG converter.
            </p>

            <div className="flex items-center justify-center gap-2 mb-12">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-6 w-6 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>
              <span className="text-lg font-semibold">4.9/5</span>
              <span className="text-muted-foreground">from 12,000+ reviews</span>
            </div>
          </div>
        </section>

        <ReviewsSection />

        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Trusted by Professionals</h2>
              <p className="text-lg text-muted-foreground">
                From students to Fortune 500 companies, everyone trusts our converter
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Adobe</div>
                <div className="text-xs text-muted-foreground">Design Team</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Microsoft</div>
                <div className="text-xs text-muted-foreground">Office Division</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Google</div>
                <div className="text-xs text-muted-foreground">Workspace</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Apple</div>
                <div className="text-xs text-muted-foreground">Marketing</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
