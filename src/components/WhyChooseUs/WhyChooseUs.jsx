import "./WhyChooseUs.css";
import {
  Truck,
  ShieldCheck,
  Star,
  RefreshCcw
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: <Truck size={45} />,
    title: "Fast Delivery",
    description: "Get your products delivered quickly."
  },

  {
    id: 2,
    icon: <ShieldCheck size={45} />,
    title: "Secure Payment",
    description: "Safe and secure online payments."
  },

  {
    id: 3,
    icon: <Star size={45} />,
    title: "Trusted Sellers",
    description: "Shop from verified sellers."
  },

  {
    id: 4,
    icon: <RefreshCcw size={45} />,
    title: "Easy Returns",
    description: "Easy return policy."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <h2>Why Choose Smart Shop?</h2>

      <div className="features-container">
        {features.map((feature) => (
          <div className="feature-card" key={feature.id}>
            <div className="feature-icon">{feature.icon}</div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
