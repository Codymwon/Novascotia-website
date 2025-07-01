import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, Users, Zap, Wrench, Hammer, Flame, Wind, HardHat, Building } from "lucide-react";
import { Link } from "wouter";

export default function SkilledWorkers() {
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

  const workerCategories = [
    {
      id: "electrical",
      title: "Electrical Professionals",
      icon: <Zap className="h-8 w-8" />,
      description: "Licensed electricians and electrical technicians for all projects",
      available: "15+ Available",
      workers: [
        {
          name: "Licensed Electricians",
          description: "Certified electrical professionals for commercial and residential work",
          skills: ["Electrical installations", "Maintenance & repairs", "Safety compliance", "Code knowledge"],
          experience: "5-15 years",
          certifications: ["Qatar Electrical License", "Safety Training", "First Aid"]
        },
        {
          name: "Electrical Technicians",
          description: "Skilled technicians for electrical system support",
          skills: ["Panel wiring", "Troubleshooting", "Testing & commissioning", "Documentation"],
          experience: "3-10 years",
          certifications: ["Technical Diploma", "Safety Training", "Equipment Certification"]
        }
      ]
    },
    {
      id: "plumbing",
      title: "Plumbing Specialists",
      icon: <Wrench className="h-8 w-8" />,
      description: "Expert plumbers and pipefitters for comprehensive plumbing solutions",
      available: "12+ Available",
      workers: [
        {
          name: "Master Plumbers",
          description: "Experienced plumbers for complex plumbing systems",
          skills: ["System design", "Installation", "Repair & maintenance", "Emergency services"],
          experience: "8-20 years",
          certifications: ["Qatar Plumbing License", "Safety Training", "Specialized Tools"]
        },
        {
          name: "Pipefitters",
          description: "Specialized in industrial and commercial piping systems",
          skills: ["Pipe installation", "Welding", "System testing", "Blueprint reading"],
          experience: "5-15 years",
          certifications: ["Pipefitting Certificate", "Welding Qualification", "Safety Training"]
        }
      ]
    },
    {
      id: "carpentry",
      title: "Carpentry & Woodwork",
      icon: <Hammer className="h-8 w-8" />,
      description: "Skilled carpenters and finishing specialists",
      available: "10+ Available",
      workers: [
        {
          name: "Finish Carpenters",
          description: "Expert finish carpenters for detailed woodwork",
          skills: ["Custom millwork", "Cabinet installation", "Trim work", "Furniture making"],
          experience: "5-18 years",
          certifications: ["Carpentry Trade Certificate", "Safety Training", "Tool Proficiency"]
        },
        {
          name: "Rough Carpenters",
          description: "Structural carpenters for framing and construction",
          skills: ["Framing", "Formwork", "Structural carpentry", "Blueprint reading"],
          experience: "4-12 years",
          certifications: ["Construction Training", "Safety Certification", "Equipment Operation"]
        }
      ]
    },
    {
      id: "welding",
      title: "Welding Professionals",
      icon: <Flame className="h-8 w-8" />,
      description: "Certified welders for all welding applications",
      available: "8+ Available",
      workers: [
        {
          name: "Structural Welders",
          description: "Certified welders for structural steel work",
          skills: ["Arc welding", "MIG/TIG welding", "Blueprint reading", "Quality control"],
          experience: "6-15 years",
          certifications: ["AWS Certification", "Structural Welding", "Safety Training"]
        },
        {
          name: "Pipe Welders",
          description: "Specialized in pipe welding and fabrication",
          skills: ["Pipe welding", "Pressure testing", "X-ray qualified", "Code compliance"],
          experience: "5-12 years",
          certifications: ["Pipe Welding Certification", "Pressure Vessel", "NDT Training"]
        }
      ]
    },
    {
      id: "hvac",
      title: "HVAC Technicians",
      icon: <Wind className="h-8 w-8" />,
      description: "Heating, ventilation, and air conditioning specialists",
      available: "10+ Available",
      workers: [
        {
          name: "HVAC Installers",
          description: "Experienced in HVAC system installation and setup",
          skills: ["System installation", "Ductwork", "Refrigeration", "Controls"],
          experience: "4-12 years",
          certifications: ["HVAC License", "Refrigeration Handling", "Safety Training"]
        },
        {
          name: "HVAC Service Technicians",
          description: "Maintenance and repair specialists for HVAC systems",
          skills: ["Troubleshooting", "Preventive maintenance", "Repair services", "Performance testing"],
          experience: "3-10 years",
          certifications: ["Service Certification", "Equipment Training", "Safety Protocols"]
        }
      ]
    },
    {
      id: "construction-labor",
      title: "General Construction Labor",
      icon: <HardHat className="h-8 w-8" />,
      description: "Skilled construction workers for various project needs",
      available: "25+ Available",
      workers: [
        {
          name: "Construction Workers",
          description: "General construction laborers for all project phases",
          skills: ["Site preparation", "Material handling", "Basic construction", "Safety procedures"],
          experience: "2-8 years",
          certifications: ["Safety Training", "Equipment Operation", "First Aid"]
        },
        {
          name: "Heavy Equipment Operators",
          description: "Certified operators for construction machinery",
          skills: ["Crane operation", "Excavator operation", "Safety protocols", "Equipment maintenance"],
          experience: "5-15 years",
          certifications: ["Equipment License", "Safety Certification", "Operator Training"]
        },
        {
          name: "Site Supervisors",
          description: "Experienced supervisors for construction site management",
          skills: ["Team leadership", "Project coordination", "Quality control", "Safety management"],
          experience: "8-20 years",
          certifications: ["Supervisor Training", "Safety Management", "Project Management"]
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
            <h1 className="text-5xl font-bold mb-6">Skilled Workforce</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Certified professionals ready to tackle your construction and industrial projects. 
              Quality-assured personnel with proven track records.
            </p>
          </div>
        </div>
      </section>

      {/* Workforce Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Available Workforce Categories</h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Our skilled professionals are thoroughly vetted, safety-trained, and ready for immediate deployment 
              on your projects.
            </p>
          </div>

          {workerCategories.map((category, categoryIndex) => (
            <div key={category.id} id={category.id} className="mb-20">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-accent text-white p-4 rounded-lg mr-4">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">{category.title}</h3>
                    <Badge variant="secondary" className="mt-2">
                      {category.available}
                    </Badge>
                  </div>
                </div>
                <p className="text-lg text-secondary max-w-2xl mx-auto">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {category.workers.map((worker, workerIndex) => (
                  <Card key={workerIndex} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl font-bold text-primary">{worker.name}</h4>
                        <Badge variant="outline" className="text-accent border-accent">
                          {worker.experience}
                        </Badge>
                      </div>
                      
                      <p className="text-secondary mb-6 leading-relaxed">{worker.description}</p>
                      
                      <div className="mb-6">
                        <h5 className="font-semibold text-primary mb-3">Key Skills</h5>
                        <div className="grid grid-cols-2 gap-2">
                          {worker.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="flex items-center text-sm text-secondary">
                              <Check className="text-accent mr-2 h-4 w-4 flex-shrink-0" />
                              <span>{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h5 className="font-semibold text-primary mb-3">Certifications</h5>
                        <div className="flex flex-wrap gap-2">
                          {worker.certifications.map((cert, certIndex) => (
                            <Badge key={certIndex} variant="secondary" className="text-xs">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button 
                        onClick={() => scrollToSection("contact")}
                        className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
                      >
                        <Users className="mr-2 h-4 w-4" />
                        Request Workers
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Workforce Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Our Workforce?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Quality Assured</h3>
                <p className="text-secondary">All workers are thoroughly vetted and certified for their respective trades</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HardHat className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Safety Trained</h3>
                <p className="text-secondary">Comprehensive safety training and ongoing safety protocol updates</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Project Ready</h3>
                <p className="text-secondary">Immediate deployment with all necessary tools and equipment</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Skilled Workers?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Contact our workforce team for immediate availability and competitive rates.
          </p>
          <Link href="/">
            <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold">
              Request Workforce Quote
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}