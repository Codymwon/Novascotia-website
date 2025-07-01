import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
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

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", section: "home" },
    { label: "About Us", section: "about" },
    { label: "Construction Materials", section: "materials" },
    { label: "Industrial Services", section: "services" },
    { label: "Skilled Workforce", section: "workforce" },
    { label: "Contact", section: "contact" },
  ];

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-accent text-white px-4 py-2 rounded-lg font-bold text-xl mr-3">
                NS
              </div>
              <div>
                <h3 className="font-bold text-xl">Nova Scotia Trading & Contracting</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for construction materials, industrial services, and skilled workforce solutions in Qatar. 
              Building excellence through quality and reliability.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className="text-gray-300 hover:text-accent transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span>Al Sadd, Doha, Qatar</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                <a href="tel:+97477743831" className="hover:text-accent transition-colors">
                  +974 77743831
                </a>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                <a href="mailto:sales@ns-me.com" className="hover:text-accent transition-colors">
                  sales@ns-me.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} Nova Scotia Trading & Contracting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
