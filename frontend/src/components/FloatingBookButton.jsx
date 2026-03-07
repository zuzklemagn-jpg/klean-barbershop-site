import { Calendar } from "lucide-react";

const BOOKING_URL = "https://klean-barbershop-booking.setmore.com/book";

const FloatingBookButton = () => {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="floating-book-btn"
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden
                 bg-gold-500 text-black
                 flex items-center justify-center gap-3
                 py-4 px-6
                 font-semibold text-sm uppercase tracking-wider
                 hover:bg-white transition-all duration-500
                 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]"
      aria-label="Réserver un rendez-vous"
    >
      <Calendar size={20} strokeWidth={2} />
      <span>Réserver un rendez-vous</span>
    </a>
  );
};

export default FloatingBookButton;
