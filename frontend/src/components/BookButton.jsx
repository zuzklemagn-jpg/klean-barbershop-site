import { ArrowRight } from "lucide-react";
import { trackBookingClick } from "../utils/analytics";

const BOOKING_URL = "https://klean-barbershop-booking.setmore.com/book";

// Reusable booking button with analytics tracking
const BookButton = ({ 
  source = "unknown", 
  variant = "primary", 
  size = "normal",
  className = "",
  children 
}) => {
  const handleClick = () => {
    trackBookingClick(source);
  };

  const baseClasses = variant === "primary" 
    ? "btn-book" 
    : "btn-secondary";
  
  const sizeClasses = size === "small" 
    ? "text-xs px-6 py-3" 
    : "";

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      data-testid={`book-btn-${source}`}
      className={`${baseClasses} ${sizeClasses} inline-flex items-center justify-center gap-3 ${className}`}
    >
      <span>{children || "Réserver"}</span>
      <ArrowRight size={size === "small" ? 16 : 18} />
    </a>
  );
};

export default BookButton;
export { BOOKING_URL };
