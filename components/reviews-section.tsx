import { Card, CardContent } from "@/components/ui/card"

export function ReviewsSection() {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Graphic Designer",
      rating: 5,
      comment: "This is hands down the best PDF to JPG converter I've used. The quality is amazing and it's so fast!",
      avatar: "/professional-woman-avatar.png",
    },
    {
      name: "Michael Chen",
      role: "Marketing Manager",
      rating: 5,
      comment:
        "I use this tool daily for converting marketing materials. It's reliable, secure, and completely free. Highly recommended!",
      avatar: "/professional-man-avatar.png",
    },
    {
      name: "Emily Rodriguez",
      role: "Student",
      rating: 5,
      comment:
        "Perfect for converting my study materials. No registration needed and the files are deleted automatically. Love it!",
      avatar: "/student-woman-avatar.jpg",
    },
    {
      name: "David Thompson",
      role: "Small Business Owner",
      rating: 5,
      comment:
        "This tool has saved me so much time and money. No need for expensive software when this works perfectly.",
      avatar: "/business-man-avatar.png",
    },
    {
      name: "Lisa Wang",
      role: "Freelancer",
      rating: 5,
      comment:
        "The batch processing feature is incredible. I can convert multiple pages at once and download them all together.",
      avatar: "/freelancer-woman-avatar.png",
    },
    {
      name: "James Miller",
      role: "Photographer",
      rating: 5,
      comment: "The image quality is outstanding. Perfect for converting my portfolio PDFs to individual JPG images.",
      avatar: "/photographer-man-avatar.jpg",
    },
  ]

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
          >
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <section className="py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What Our Users Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied users who trust our PDF to JPG converter for their daily needs
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <StarRating rating={5} />
            <span className="text-sm font-medium">4.9/5 from 12,000+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={review.avatar || "/placeholder.svg"}
                    alt={review.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-sm">{review.name}</h4>
                    <p className="text-xs text-muted-foreground">{review.role}</p>
                  </div>
                </div>
                <StarRating rating={review.rating} />
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">"{review.comment}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2M+</div>
              <div className="text-sm text-muted-foreground">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10M+</div>
              <div className="text-sm text-muted-foreground">Files Converted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
