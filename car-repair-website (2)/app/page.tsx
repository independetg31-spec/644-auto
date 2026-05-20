import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { FeaturesSection } from "@/components/features-section";
import { ProcessSection } from "@/components/process-section";
import { ReviewsSection } from "@/components/reviews-section";
import { CalculatorSection } from "@/components/calculator-section";
import { ContactsSection } from "@/components/contacts-section";
import { Footer } from "@/components/footer";
import { AIChatWidget } from "@/components/ai-chat-widget";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <ProcessSection />
      <CalculatorSection />
      <ReviewsSection />
      <ContactsSection />
      <Footer />
      <AIChatWidget />
    </main>
  );
}
