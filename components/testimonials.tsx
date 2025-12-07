import { Star } from "lucide-react"
import { getReviews } from "@/lib/reviews"

export default function Testimonials({ language = "en" }) {
  const reviews = getReviews()
  const isAr = language === "ar"

  return (
    <section className="py-20 bg-black" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold mb-4">
            {isAr ? "آراء" : "Clients"} <span className="text-accent">{isAr ? "عملائنا" : "Love"}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.slice(0, 3).map((review) => (
            <div key={review.id} className="bg-card p-8 rounded-xl border border-accent/20 shadow-sm">
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 italic">
                {review.content}
              </p>

              {/* Name */}
              <div className="font-bold text-foreground">
                {review.name}
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}