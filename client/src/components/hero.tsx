import { Button } from "@/components/ui/button";
import { Phone, Info, ChevronDown, CheckCircle } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center hero-bg text-white relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Build the{" "}
              <span className="text-accent">Future</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              Leading provider of construction materials, industrial services, and skilled workforce solutions in Doha, Qatar. Your trusted partner for comprehensive construction and industrial supply needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5" />
                Work With Us
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("about")}
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                <Info className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-400">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100+</div>
                <div className="text-sm text-gray-300">Satisfied Clients</div>
              </div>
            </div>
          </div>

          {/* Hero Feature Box */}
          <div className="lg:text-right">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-6 text-accent">Why Choose Nova Scotia?</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="text-accent mr-3 h-5 w-5" />
                  <span>Comprehensive Construction Solutions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-accent mr-3 h-5 w-5" />
                  <span>Certified Industrial Services</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-accent mr-3 h-5 w-5" />
                  <span>Skilled Professional Workforce</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-accent mr-3 h-5 w-5" />
                  <span>Based in Doha, Qatar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-slow">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}
