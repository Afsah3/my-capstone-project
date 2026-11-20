import "./AnnouncementBar.css";
import { Truck, Flame } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="announcement">
      <Truck size={18} />

      <span>
        Free delivery on orders over <strong>50,000 RWF</strong>
      </span>

      <span className="divider">|</span>

      <Flame size={18} />

      <span>Flash Sale Today!</span>
    </div>
  );
}