import ContactForm from "../components/forms/ContactForm";
import FeaturesSection from "../components/home/FeaturesSection";
import HeroSection from "../components/home/HeroSection";
import WhyRealGud from "../components/home/WhyChooseUs";

export default function Home() {
  return (
    <div>   
     <HeroSection />
      <FeaturesSection />
      <WhyRealGud />
      <ContactForm />
    </div>
  );
}