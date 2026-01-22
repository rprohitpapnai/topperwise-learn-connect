import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-28 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Topper Wise" className="h-24 w-auto -my-4" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/#features" className="text-foreground/80 hover:text-primary transition-colors">
              Features
            </a>

            <Link to="/pricing" className="text-foreground/80 hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/careers" className="text-foreground/80 hover:text-primary transition-colors">
              Careers
            </Link>
            <Link to="/faq" className="text-foreground/80 hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button variant="hero">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3">
            <a href="/#features" className="block py-2 text-foreground/80 hover:text-primary transition-colors">
              Features
            </a>

            <Link to="/pricing" className="block py-2 text-foreground/80 hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="block py-2 text-foreground/80 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/careers" className="block py-2 text-foreground/80 hover:text-primary transition-colors">
              Careers
            </Link>
            <Link to="/faq" className="block py-2 text-foreground/80 hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="block py-2 text-foreground/80 hover:text-primary transition-colors">
              Contact
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Link to="/login" className="w-full">
                <Button variant="ghost" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup" className="w-full">
                <Button variant="hero" className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
