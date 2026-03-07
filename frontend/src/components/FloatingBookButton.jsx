import { Calendar } from "lucide-react";

const BOOKING_URL = "https://klean-barbershop-booking.setmore.com/book";

const FloatingBookButton = () => {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="floating-book-btn"
      className="fixed bottom-6 right-6 z-50 md:hidden float-btn
                 bg-gold-500 text-black p-5 
                 flex items-center justify-center
                 hover:bg-white transition-all duration-500"
      aria-label="Réserver un rendez-vous"
    >
      <Calendar size={24} strokeWidth={2} />
    </a>
  );
};

export default FloatingBookButton;
