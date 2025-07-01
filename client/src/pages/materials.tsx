import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, ShoppingCart } from "lucide-react";
import { Link } from "wouter";

export default function Materials() {
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

  const productCategories = [
    {
      id: "fasteners",
      title: "Fasteners & Connectors",
      description: "High-strength fastening solutions for construction applications",
      products: [
        {
          name: "Rebar Couplers",
          description: "Mechanical rebar splicing system for reinforcement continuity",
          features: ["Thread-bar connections", "High tensile strength", "Easy installation", "Corrosion resistant"],
          image: "https://images.unsplash.com/photo-1607400201515-c2c41c07d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
        },
        {
          name: "Connection Bolts",
          description: "Premium quality bolts for structural connections",
          features: ["High-grade steel", "Various sizes available", "Galvanized coating", "Load tested"],
          image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
        },
        {
          name: "TCB Bolts",
          description: "Tension Control Bolts for structural steel connections",
          features: ["Precise tension control", "Consistent installation", "High shear capacity", "Weather resistant"],
          image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
        }
      ]
    },
    {
      id: "anchors",
      title: "Anchoring Systems",
      description: "Chemical and mechanical anchoring solutions for secure connections",
      products: [
        {
          name: "Nelson Shear Studs",
          description: "Welded shear connectors for composite construction",
          features: ["Arc stud welding", "Various diameters", "Quality assured", "Fast installation"],
          image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
        },
        {
          name: "Chemical Anchors",
          description: "High-performance chemical anchoring systems",
          features: ["Injectable resin", "High load capacity", "Seismic approved", "All weather application"],
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
        },
        {
          name: "Mechanical Anchors",
          description: "Expansion and undercut anchoring systems",
          features: ["Immediate loading", "Removable options", "Cracked concrete", "Easy installation"],
          image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
        }
      ]
    },
    {
      id: "chemicals",
      title: "Construction Chemicals",
      description: "Sika construction chemicals for enhanced performance",
      products: [
        {
          name: "Sika Construction Chemicals",
          description: "Complete range of Sika products for construction needs",
          features: ["Concrete admixtures", "Sealants & adhesives", "Repair mortars", "Waterproofing systems"],
          image: "https://images.unsplash.com/photo-1581093458791-9f3c3250e6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
        }
      ]
    },
    {
      id: "support-systems",
      title: "Support Systems",
      description: "Pipe support and structural systems",
      products: [
        {
          name: "Pipe Clamps and Hangers",
          description: "Complete pipe support solutions for all applications",
          features: ["Various pipe sizes", "Adjustable hangers", "Corrosion resistant", "Seismic rated"],
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
        },
        {
          name: "Cable Trays",
          description: "Cable management systems for electrical installations",
          features: ["Galvanized steel", "Ladder & solid bottom", "Easy installation", "Custom lengths"],
          image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
        }
      ]
    },
    {
      id: "architectural",
      title: "Architectural Elements",
      description: "Gratings, access solutions, and EIFS components",
      products: [
        {
          name: "Floor Gratings",
          description: "Heavy-duty steel gratings for industrial applications",
          features: ["Welded steel bars", "Non-slip surface", "Drainage capability", "Custom fabrication"],
          image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
        },
        {
          name: "Manholes",
          description: "Access covers and frames for utility applications",
          features: ["Cast iron/steel", "Load rated", "Anti-theft design", "Various sizes"],
          image: "https://images.unsplash.com/photo-1565694316971-a1e0b75b0d69?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
        },
        {
          name: "EIFS Corner Beads & Mesh",
          description: "External Insulation Finishing System components",
          features: ["Corner protection", "Reinforcement mesh", "Weather resistant", "Easy application"],
          image: "https://images.unsplash.com/photo-1581093458791-9f3c3250e6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
        },
        {
          name: "Fabricated Handrails",
          description: "Custom fabricated handrails and balustrades",
          features: ["Stainless steel", "Custom designs", "Safety compliant", "Powder coated finish"],
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
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
            <h1 className="text-5xl font-bold mb-6">Construction Materials</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Premium quality construction materials sourced from trusted manufacturers worldwide. 
              Everything you need for your construction projects.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {productCategories.map((category, categoryIndex) => (
            <div key={category.id} id={category.id} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">{category.title}</h2>
                <p className="text-lg text-secondary max-w-2xl mx-auto">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.products.map((product, productIndex) => (
                  <Card key={productIndex} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-3">{product.name}</h3>
                      <p className="text-secondary mb-4 leading-relaxed">{product.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-secondary">
                            <Check className="text-accent mr-2 h-4 w-4 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button 
                          onClick={() => scrollToSection("contact")}
                          className="flex-1 bg-accent hover:bg-accent/90 text-white font-semibold"
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Request Quote
                        </Button>
                      </div>
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
          <h2 className="text-3xl font-bold mb-4">Need Custom Materials?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Contact our expert team for customized material solutions and bulk pricing.
          </p>
          <Link href="/">
            <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold">
              Contact Our Team
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}