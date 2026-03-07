import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import BookButton from "../components/BookButton";
import { trackPageView } from "../utils/analytics";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const BOOKING_URL = "https://klean-barbershop-booking.setmore.com/book";

const faqs = [
  { question: "Faut-il prendre rendez-vous ?", answer: "Oui, nous vous recommandons de réserver votre créneau en ligne via notre système de réservation Setmore. Cela vous garantit un temps d'attente minimal et une prise en charge rapide. Vous pouvez aussi nous appeler pour réserver." },
  { question: "Quelles prestations proposez-vous ?", answer: "Nous proposons une gamme complète de services : coupes classiques et modernes, dégradés précis, rasage de tête et de barbe, ainsi que des coiffures afro comme les tresses, twists et locks. Nous offrons également une expérience VIP premium." },
  { question: "Faites-vous les tresses et les locks ?", answer: "Absolument ! Nous sommes spécialisés dans les coiffures afro. Que ce soit pour des braids, twists, locks ou starter locks, notre équipe maîtrise toutes les techniques pour sublimer votre style." },
  { question: "Comment sont calculés les prix pour les coiffures afro ?", answer: "Les prix varient selon la longueur de vos cheveux, le style souhaité et le temps nécessaire. Nous vous invitons à nous contacter pour obtenir un devis personnalisé ou à venir au salon pour une consultation gratuite." },
  { question: "Proposez-vous des soins pour la barbe ?", answer: "Oui, nous offrons plusieurs prestations pour la barbe : taille simple, rasage traditionnel avec serviettes chaudes et huiles, ou rasage combiné tête + barbe. Chaque soin inclut des produits premium pour un résultat impeccable." },
  { question: "Où se situe le salon ?", answer: "Nous sommes situés au 11 Place du Plessis Saucourt, 91250 Tigery, France. Le salon est facilement accessible et dispose d'un parking à proximité." },
  { question: "Quels sont vos horaires ?", answer: "Nous sommes ouverts : Lundi 13h-20h, Mardi à Jeudi 10h-20h, Vendredi et Samedi 10h-21h, Dimanche 13h-19h. Nous vous conseillons de réserver pour vous assurer de la disponibilité." },
  { question: "Quels modes de paiement acceptez-vous ?", answer: "Nous acceptons les paiements en espèces et par carte bancaire. Le paiement s'effectue sur place après la prestation." },
  { question: "Puis-je offrir une prestation en cadeau ?", answer: "Absolument ! Offrez l'expérience KLEAN à vos proches. Contactez-nous pour organiser un bon cadeau personnalisé, idéal pour toute occasion." },
  { question: "Que comprend l'Expérience KLEAN Exclusive ?", answer: "Notre forfait VIP à 250€ (3 heures) inclut : consultation personnalisée, coupe et coiffage complets, rasage traditionnel et soin barbe, serviettes chaudes, massage crânien aux huiles essentielles, finitions et styling, ainsi qu'une boisson offerte." }
];

const FAQ = () => {
  useEffect(() => {
    trackPageView("faq");
  }, []);

  return (
    <div data-testid="faq-page" className="pt-24 bg-obsidian">
      <SEOHead page="faq" />
      
      {/* Hero */}
      <section className="section-spacing">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="premium-label mb-6 block">Vos questions</span>
            
            <h1 className="font-syne font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-tighter mb-4">
              Questions <span className="gold-gradient-text">fréquentes</span>
            </h1>
            
            <div className="gold-divider mb-8" />
            
            <p className="text-neutral-400 text-lg leading-relaxed">
              Retrouvez les réponses aux questions les plus fréquentes. 
              Si vous ne trouvez pas votre réponse, n'hésitez pas à nous contacter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-spacing bg-charcoal">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <AccordionItem 
                    value={`item-${index}`}
                    className="border border-white/5 bg-obsidian/50 px-8 data-[state=open]:border-gold-500/30 transition-all duration-300"
                  >
                    <AccordionTrigger 
                      className="py-6 text-left font-syne font-medium text-white hover:text-gold-400 transition-colors [&[data-state=open]]:text-gold-400"
                      data-testid={`faq-question-${index}`}
                    >
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-neutral-400 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-spacing bg-obsidian">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight mb-4">
                Une autre question ?
              </h2>
              <p className="font-elegant text-xl text-gold-400 italic mb-8">
                Notre équipe est à votre disposition
              </p>
              <p className="text-neutral-400 leading-relaxed mb-10">
                N'hésitez pas à nous contacter par téléphone ou à passer directement au salon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+33699393917" className="btn-secondary inline-flex items-center justify-center">
                  Appeler le salon
                </a>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="faq-book-btn"
                  className="btn-book inline-flex items-center justify-center gap-3"
                >
                  <span>Réserver</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative hidden md:block"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3993307/pexels-photo-3993307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Salon KLEAN"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-l-2 border-b-2 border-gold-500/30" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
