import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Topper Wise" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/#features" className="text-foreground/80 hover:text-primary transition-colors">
              Features
            </a>
            <a href="/#boards" className="text-foreground/80 hover:text-primary transition-colors">
              Boards
            </a>
            <Link to="/pricing" className="text-foreground/80 hover:text-primary transition-colors">
              Pricing
            </Link>
            <a href="/#contact" className="text-foreground/80 hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost">Sign In</Button>
            <Button variant="hero">Get Started</Button>
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
            <a href="/#boards" className="block py-2 text-foreground/80 hover:text-primary transition-colors">
              Boards
            </a>
            <Link to="/pricing" className="block py-2 text-foreground/80 hover:text-primary transition-colors">
              Pricing
            </Link>
            <a href="/#contact" className="block py-2 text-foreground/80 hover:text-primary transition-colors">
              Contact
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="ghost" className="w-full">
                Sign In
              </Button>
              <Button variant="hero" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
