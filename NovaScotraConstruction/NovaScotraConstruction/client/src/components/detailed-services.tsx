import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Zap, Wrench, Hammer, Flame, Users } from "lucide-react";

export default function DetailedServices() {
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

  const materials = [
    {
      title: "Steel Gratings & Mesh",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      features: ["Heavy-duty steel gratings", "Welded mesh panels", "Custom sizing available"],
    },
    {
      title: "Rebar Couplers",
      image: "https://images.unsplash.com/photo-1607400201515-c2c41c07d307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      features: ["Mechanical rebar couplers", "Thread-bar connections", "High-strength joints"],
    },
    {
      title: "Drainage Systems",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      features: ["Surface drainage solutions", "Channel drainage systems", "Custom installations"],
    },
  ];

  const industrialServices = [
    {
      title: "Motor Rewinding",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      features: ["AC/DC motor rewinding", "Performance testing", "Quality assurance"],
    },
    {
      title: "Generator Maintenance",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      features: ["Preventive maintenance", "Emergency repairs", "24/7 support available"],
    },
    {
      title: "Custom Fabrication",
      image: "https://images.unsplash.com/photo-1565694316971-a1e0b75b0d69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      features: ["Metal fabrication", "Welding services", "Custom designs"],
    },
  ];

  const workforce = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Electricians",
      description: "Licensed and certified electrical professionals",
      available: "15+ Available",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Plumbers",
      description: "Experienced plumbing and pipefitting specialists",
      available: "12+ Available",
    },
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Carpenters",
      description: "Skilled woodworkers and finishing specialists",
      available: "10+ Available",
    },
    {
      icon: <Flame className="h-8 w-8" />,
      title: "Welders",
      description: "Certified welding professionals all types",
      available: "8+ Available",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Construction Materials Section */}
        <div id="materials" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Construction Materials</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Premium quality construction materials sourced from trusted manufacturers worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {materials.map((material, index) => (
              <Card key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={material.image}
                  alt={material.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{material.title}</h3>
                  <ul className="text-secondary space-y-2 mb-4">
                    {material.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="text-accent mr-2 h-4 w-4" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-accent font-semibold p-0"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Industrial Services Section */}
        <div id="services" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Industrial Services</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Professional industrial maintenance and fabrication services with certified technicians
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industrialServices.map((service, index) => (
              <Card key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <ul className="text-secondary space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="text-accent mr-2 h-4 w-4" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-accent font-semibold p-0"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skilled Workforce Section */}
        <div id="workforce">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Skilled Workforce Supply</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Certified professionals ready to tackle your construction and industrial projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workforce.map((worker, index) => (
              <Card key={index} className="bg-white rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {worker.icon}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{worker.title}</h3>
                  <p className="text-secondary text-sm mb-4">{worker.description}</p>
                  <div className="text-accent font-semibold">{worker.available}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Users className="mr-2 h-5 w-5" />
              Request Workforce Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
