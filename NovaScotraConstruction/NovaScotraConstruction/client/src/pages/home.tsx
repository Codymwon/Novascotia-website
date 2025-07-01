import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import ServicesOverview from "@/components/services-overview";
import About from "@/components/about";
import DetailedServices from "@/components/detailed-services";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ServicesOverview />
      <About />
      <DetailedServices />
      <Contact />
      <Footer />
    </div>
  );
}
