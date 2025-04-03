
import React, { useState } from 'react';
import { Menu, X, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container-recipe py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <ChefHat className="h-8 w-8 text-terracotta" />
            <span className="text-xl font-serif font-bold text-cedar">FlavorFlux</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-cedar hover:text-terracotta transition-colors">
              Home
            </Link>
            <Link to="/converter" className="text-cedar hover:text-terracotta transition-colors">
              Converter
            </Link>
            <Link to="/contact" className="text-cedar hover:text-terracotta transition-colors">
              Contact
            </Link>
            <Link to="/about" className="text-cedar hover:text-terracotta transition-colors">
              About
            </Link>
            <Link to="/privacy" className="text-cedar hover:text-terracotta transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-cedar hover:text-terracotta transition-colors">
              Terms
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-cedar" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-cedar hover:text-terracotta transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/converter" 
              className="text-cedar hover:text-terracotta transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Converter
            </Link>
            <Link 
              to="/contact" 
              className="text-cedar hover:text-terracotta transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/about" 
              className="text-cedar hover:text-terracotta transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/privacy" 
              className="text-cedar hover:text-terracotta transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy
            </Link>
            <Link 
              to="/terms" 
              className="text-cedar hover:text-terracotta transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Terms
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
