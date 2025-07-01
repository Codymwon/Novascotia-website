import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Hammer, Settings, Users, Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function ServicesOverview() {
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

  const services = [
    {
      id: "materials",
      title: "Construction Materials",
      description: "High-quality construction materials including gratings, rebar couplers, and drainage systems for all your building needs.",
      icon: <Hammer className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      features: ["Steel Gratings & Mesh", "Rebar Couplers & Connectors", "Drainage Systems"],
      buttonText: "Explore Materials",
      route: "/materials",
    },
    {
      id: "services",
      title: "Industrial Services",
      description: "Professional industrial services including motor rewinding, generator maintenance, and custom fabrication solutions.",
      icon: <Settings className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      features: ["Motor Rewinding & Repair", "Generator Maintenance", "Custom Fabrication"],
      buttonText: "View Services",
      route: "/services",
    },
    {
      id: "workforce",
      title: "Skilled Workforce",
      description: "Certified and experienced professionals including electricians, plumbers, carpenters, and specialized welders.",
      icon: <Users className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      features: ["Licensed Electricians", "Certified Plumbers", "Skilled Carpenters & Welders"],
      buttonText: "Find Workers",
      route: "/skilled-workers",
    },
  ];

  return (
    <section id="services-overview" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Our Core Business Areas
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Nova Scotia Trading & Contracting offers comprehensive solutions across three key sectors, 
            ensuring your project success from materials to skilled workforce.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-accent text-white p-3 rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                </div>
                
                <p className="text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-secondary">
                      <Check className="text-accent mr-2 h-4 w-4" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Link href={service.route}>
                  <Button
                    variant="ghost"
                    className="inline-flex items-center text-primary hover:text-accent font-semibold transition-colors duration-300 group-hover:translate-x-2 transform p-0"
                  >
                    {service.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
