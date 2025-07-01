import { Award, Handshake, Clock, Shield } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Award className="h-5 w-5" />,
      title: "Quality Excellence",
      description: "Committed to delivering superior quality in every aspect of our service.",
    },
    {
      icon: <Handshake className="h-5 w-5" />,
      title: "Trusted Partnership",
      description: "Building long-term relationships based on trust and mutual success.",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Timely Delivery",
      description: "Ensuring projects are completed on time and within budget.",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Safety First",
      description: "Maintaining the highest safety standards in all our operations.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">
              About Nova Scotia Trading & Contracting
            </h2>
            <p className="text-lg text-secondary mb-6 leading-relaxed">
              Established as Qatar's premier construction and industrial supply company, Nova Scotia Trading & Contracting 
              has been serving the Doha market with excellence and reliability for over a decade.
            </p>
            <p className="text-lg text-secondary mb-8 leading-relaxed">
              Our comprehensive approach combines high-quality materials, professional services, and skilled workforce 
              solutions to ensure your project's success from conception to completion.
            </p>

            {/* Company Values */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-accent text-white p-2 rounded-lg mr-4 mt-1">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">{value.title}</h4>
                    <p className="text-sm text-secondary">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern construction site in Doha"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            
            {/* Overlay Stats Box */}
            <div className="absolute -bottom-8 -left-8 bg-primary text-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">2024</div>
                <div className="text-sm">Serving Qatar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
