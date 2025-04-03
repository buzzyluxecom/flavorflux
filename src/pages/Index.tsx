
import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Calculator, ArrowRight, Scale } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cream to-sand pt-16 pb-20">
          <div className="container-recipe text-center">
            <ChefHat className="h-14 w-14 mx-auto text-terracotta mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-cedar mb-4">
              Recipe Conversion Made Simple
            </h1>
            <p className="text-lg md:text-xl text-cedar/80 max-w-2xl mx-auto mb-8">
              Convert measurements, adjust serving sizes, and transform your favorite recipes 
              with precision and ease.
            </p>
            <Link 
              to="/converter" 
              className="btn-recipe inline-flex items-center gap-2 text-lg px-6 py-3"
            >
              <span>Start Converting</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16">
          <div className="container-recipe">
            <h2 className="text-3xl font-serif font-bold text-center text-cedar mb-12">
              Your Perfect Kitchen Assistant
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="recipe-card p-6 text-center">
                <div className="bg-cream h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-terracotta" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-cedar mb-3">
                  Unit Conversion
                </h3>
                <p className="text-cedar/80">
                  Easily convert between metric and imperial units for any recipe ingredient.
                </p>
              </div>
              
              <div className="recipe-card p-6 text-center">
                <div className="bg-cream h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8 text-terracotta" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-cedar mb-3">
                  Serving Adjustment
                </h3>
                <p className="text-cedar/80">
                  Scale recipes up or down to get the exact amount you need for any number of servings.
                </p>
              </div>
              
              <div className="recipe-card p-6 text-center">
                <div className="bg-cream h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="h-8 w-8 text-terracotta" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-cedar mb-3">
                  Ingredient Specific
                </h3>
                <p className="text-cedar/80">
                  Accurate conversions based on ingredient density for perfect results every time.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-cedar text-white py-16">
          <div className="container-recipe text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Ready to Transform Your Cooking?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              No more guesswork or math errors. Get precise measurements for perfect results 
              every time with our easy-to-use recipe converter.
            </p>
            <Link 
              to="/converter" 
              className="bg-terracotta hover:bg-terracotta/90 text-white font-medium py-3 px-6 rounded-md transition-colors inline-flex items-center gap-2"
            >
              <span>Try the Converter</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
