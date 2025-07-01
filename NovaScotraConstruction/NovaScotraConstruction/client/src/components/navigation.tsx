import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <div className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-xl">
                NS
              </div>
              <div className="ml-3">
                <h1 className="text-primary font-bold text-lg leading-tight">
                  Nova Scotia Trading
                </h1>
                <p className="text-secondary text-sm">& Contracting</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {location === "/" ? (
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-primary hover:text-accent font-medium transition-colors duration-300"
                >
                  Home
                </button>
              ) : (
                <Link href="/" className="text-primary hover:text-accent font-medium transition-colors duration-300">
                  Home
                </Link>
              )}

              {/* Products Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-primary hover:text-accent font-medium transition-colors duration-300 flex items-center">
                  Products & Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64">
                  <DropdownMenuItem className="cursor-pointer">
                    <Link href="/materials" className="flex items-center w-full">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Construction Materials
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Link href="/services" className="flex items-center w-full">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Industrial Services
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Link href="/skilled-workers" className="flex items-center w-full">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Skilled Workforce
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {location === "/" ? (
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-primary hover:text-accent font-medium transition-colors duration-300"
                >
                  About
                </button>
              ) : (
                <Link href="/#about" className="text-primary hover:text-accent font-medium transition-colors duration-300">
                  About
                </Link>
              )}
              
              {location === "/" ? (
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-primary hover:text-accent font-medium transition-colors duration-300"
                >
                  Contact
                </button>
              ) : (
                <Link href="/#contact" className="text-primary hover:text-accent font-medium transition-colors duration-300">
                  Contact
                </Link>
              )}

              {location === "/" ? (
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Work With Us
                </Button>
              ) : (
                <Link href="/#contact">
                  <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                    Work With Us
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary hover:text-accent"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {location === "/" ? (
                <button
                  onClick={() => scrollToSection("home")}
                  className="block w-full text-left px-3 py-2 text-primary hover:bg-gray-50 rounded-md"
                >
                  Home
                </button>
              ) : (
                <Link href="/" className="block w-full text-left px-3 py-2 text-primary hover:bg-gray-50 rounded-md">
                  Home
                </Link>
              )}
              
              <Link href="/materials" className="block w-full text-left px-3 py-2 text-primary hover:bg-gray-50 rounded-md">
                Construction Materials
              </Link>
              
              <Link href="/services" className="block w-full text-left px-3 py-2 text-primary hover:bg-gray-50 rounded-md">
                Industrial Services
              </Link>
              
              <Link href="/skilled-workers" className="block w-full text-left px-3 py-2 text-primary hover:bg-gray-50 rounded-md">
                Skilled Workforce
              </Link>
              
              {location === "/" ? (
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left px-3 py-2 text-primary hover:bg-gray-50 rounded-md"
                >
                  About
                </button>
              ) : (
                <Link href="/#about" className="block w-full text-left px-3 py-2 text-primary hover:bg-gray-50 rounded-md">
                  About
                </Link>
              )}
              
              {location === "/" ? (
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full text-left px-3 py-2 text-primary hover:bg-gray-50 rounded-md"
                >
                  Contact
                </button>
              ) : (
                <Link href="/#contact" className="block w-full text-left px-3 py-2 text-primary hover:bg-gray-50 rounded-md">
                  Contact
                </Link>
              )}
              
              {location === "/" ? (
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full mx-3 mt-4 bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg font-medium"
                >
                  Work With Us
                </Button>
              ) : (
                <Link href="/#contact">
                  <Button className="w-full mx-3 mt-4 bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg font-medium">
                    Work With Us
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
