import "./Testimonials.css";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Alice",
    comment: "Amazing products and very fast delivery.",
  },

  {
    id: 2,
    name: "David",
    comment: "Smart Shop makes online shopping easy.",
  },

  {
    id: 3,
    name: "Sarah",
    comment: "Great quality products at affordable prices.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>

      <div className="reviews-container">
        {reviews.map((review) => (
          <div className="review-card" key={review.id}>
            
            <div className="stars">
              {[...Array(5)].map((_, index) => (
                <Star key={index} size={18} fill="#F97316" color="#F97316" />
              ))}
            </div>

            <p>"{review.comment}"</p>

            <h3>- {review.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
