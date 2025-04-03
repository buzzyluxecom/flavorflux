
import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cream mt-12 pt-8 pb-6">
      <div className="container-recipe">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <ChefHat className="h-6 w-6 text-terracotta" />
              <span className="text-lg font-serif font-bold text-cedar">FlavorFlux</span>
            </Link>
            <p className="mt-4 text-sm text-cedar/80">
              Convert any recipe to your preferred units and serving size in seconds.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-serif font-bold text-cedar mb-4">Site Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-cedar/80 hover:text-terracotta transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/converter" className="text-sm text-cedar/80 hover:text-terracotta transition-colors">
                  Converter
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-cedar/80 hover:text-terracotta transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-cedar/80 hover:text-terracotta transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-serif font-bold text-cedar mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-cedar/80 hover:text-terracotta transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-cedar/80 hover:text-terracotta transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-cedar/80 hover:text-terracotta transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-serif font-bold text-cedar mb-4">Connect With Us</h3>
            <p className="text-sm text-cedar/80 mb-2">
              Questions or feedback? We'd love to hear from you!
            </p>
            <Link to="/contact" className="inline-block btn-recipe text-sm">
              Contact Us
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-cedar/10 text-center">
          <p className="text-sm text-cedar/70 flex items-center justify-center gap-1">
            <span>© {currentYear} FlavorFlux. Made with</span> 
            <Heart className="h-4 w-4 text-terracotta fill-terracotta" /> 
            <span>for home chefs.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
