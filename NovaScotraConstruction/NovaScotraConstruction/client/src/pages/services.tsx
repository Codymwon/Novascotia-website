import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, Wrench, Settings, Users, Building, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
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

  const serviceCategories = [
    {
      id: "motor-rewinding",
      title: "Motor Rewinding Services",
      icon: <Zap className="h-8 w-8" />,
      description: "Expert motor rewinding and repair services for industrial applications",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      features: [
        "AC/DC Motor Rewinding",
        "Performance Testing & Analysis",
        "Quality Assurance Testing",
        "Same Day Emergency Service",
        "Preventive Maintenance Plans",
        "On-site Troubleshooting"
      ],
      services: [
        {
          name: "Standard Motor Rewinding",
          description: "Complete rewinding service for all motor types up to 500HP"
        },
        {
          name: "High Voltage Motor Service",
          description: "Specialized service for motors above 1000V"
        },
        {
          name: "Performance Upgrades",
          description: "Efficiency improvements and power factor correction"
        }
      ]
    },
    {
      id: "generator-maintenance",
      title: "Generator Maintenance",
      icon: <Settings className="h-8 w-8" />,
      description: "Comprehensive generator maintenance and emergency repair services",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      features: [
        "Preventive Maintenance Programs",
        "Emergency Repair Services",
        "24/7 Support Available",
        "Load Bank Testing",
        "Fuel System Maintenance",
        "Control Panel Upgrades"
      ],
      services: [
        {
          name: "Scheduled Maintenance",
          description: "Regular maintenance programs to ensure optimal performance"
        },
        {
          name: "Emergency Repairs",
          description: "24/7 emergency response for critical power systems"
        },
        {
          name: "Performance Testing",
          description: "Load testing and efficiency analysis"
        }
      ]
    },
    {
      id: "fabrication",
      title: "Custom Fabrication",
      icon: <Wrench className="h-8 w-8" />,
      description: "Professional metal fabrication and welding services",
      image: "https://images.unsplash.com/photo-1565694316971-a1e0b75b0d69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      features: [
        "Custom Metal Fabrication",
        "Structural Steel Work",
        "Precision Welding Services",
        "Prototype Development",
        "Production Manufacturing",
        "Quality Control Testing"
      ],
      services: [
        {
          name: "Structural Fabrication",
          description: "Custom structural steel components for construction"
        },
        {
          name: "Architectural Metalwork",
          description: "Decorative and functional architectural elements"
        },
        {
          name: "Equipment Frames",
          description: "Custom frames and supports for industrial equipment"
        }
      ]
    },
    {
      id: "fit-out",
      title: "Fit-Out Services",
      icon: <Building className="h-8 w-8" />,
      description: "Complete interior fit-out solutions for commercial and industrial spaces",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      features: [
        "Office Fit-Out Solutions",
        "Industrial Space Planning",
        "MEP Installation",
        "Interior Design Coordination",
        "Project Management",
        "Turnkey Solutions"
      ],
      services: [
        {
          name: "Commercial Office Fit-Out",
          description: "Complete office interior solutions from planning to completion"
        },
        {
          name: "Industrial Facility Setup",
          description: "Specialized fit-out for manufacturing and warehouse facilities"
        },
        {
          name: "Retail Space Development",
          description: "Custom retail environment design and implementation"
        }
      ]
    },
    {
      id: "workforce-solutions",
      title: "Workforce Solutions",
      icon: <Users className="h-8 w-8" />,
      description: "Skilled workforce supply and manpower solutions",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      features: [
        "Skilled Labor Supply",
        "Project-Based Teams",
        "Long-term Contracts",
        "Quality Assured Personnel",
        "Safety Trained Workers",
        "Flexible Scheduling"
      ],
      services: [
        {
          name: "Construction Crews",
          description: "Complete construction teams for residential and commercial projects"
        },
        {
          name: "Maintenance Personnel",
          description: "Skilled technicians for ongoing facility maintenance"
        },
        {
          name: "Specialized Contractors",
          description: "Expert contractors for specific trade requirements"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:text-accent mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-5xl font-bold mb-6">Industrial Services</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Professional industrial maintenance, fabrication, and workforce solutions 
              with certified technicians and quality assurance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={category.id} id={category.id} className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                <div className={categoryIndex % 2 === 0 ? "order-1" : "order-2"}>
                  <div className="flex items-center mb-6">
                    <div className="bg-accent text-white p-4 rounded-lg mr-4">
                      {category.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-primary">{category.title}</h2>
                  </div>
                  <p className="text-lg text-secondary mb-6 leading-relaxed">{category.description}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-secondary">
                        <Check className="text-accent mr-2 h-4 w-4 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={() => scrollToSection("contact")}
                    className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg font-semibold"
                  >
                    Request Service Quote
                  </Button>
                </div>

                <div className={categoryIndex % 2 === 0 ? "order-2" : "order-1"}>
                  <img
                    src={category.image}
                    alt={category.title}
                    className="rounded-2xl shadow-2xl w-full h-auto"
                  />
                </div>
              </div>

              {/* Service Details */}
              <div className="grid md:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <Card key={serviceIndex} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-primary mb-3">{service.name}</h3>
                      <p className="text-secondary text-sm leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Professional Services?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Contact our expert service team for customized solutions and competitive pricing.
          </p>
          <Link href="/">
            <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold">
              Get Service Quote
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}