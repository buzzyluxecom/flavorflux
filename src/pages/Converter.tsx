
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RecipeConverter from '@/components/RecipeConverter';
import { Sparkles, Calculator, Clipboard } from 'lucide-react';

const Converter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-cream py-12">
          <div className="container-recipe">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-cedar mb-4">
                Recipe Unit Converter
              </h1>
              <p className="text-lg text-cedar/80 mb-6">
                Convert any ingredient measurement with precision. Adjust serving sizes or switch
                between metric and imperial units effortlessly.
              </p>
            </div>
          </div>
        </section>
        
        {/* Converter Section */}
        <section className="py-12">
          <div className="container-recipe">
            <RecipeConverter />
            
            <div className="mt-12 max-w-2xl mx-auto">
              <h2 className="text-2xl font-serif font-bold text-cedar mb-4">
                How to Use the Recipe Converter
              </h2>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-terracotta/10 h-8 w-8 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-terracotta font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-cedar text-lg">Enter the Amount</h3>
                    <p className="text-cedar/80">
                      Type in the quantity of the ingredient you want to convert.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-terracotta/10 h-8 w-8 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-terracotta font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-cedar text-lg">Select Units</h3>
                    <p className="text-cedar/80">
                      Choose the original unit and the unit you want to convert to.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-terracotta/10 h-8 w-8 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-terracotta font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-cedar text-lg">Select Ingredient (Optional)</h3>
                    <p className="text-cedar/80">
                      For volume to weight conversions, select the specific ingredient for more accurate results.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-terracotta/10 h-8 w-8 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-terracotta font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-cedar text-lg">Adjust Servings (Optional)</h3>
                    <p className="text-cedar/80">
                      Scale your recipe up or down by entering the original servings and your desired servings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Tips Section */}
        <section className="bg-cream py-12">
          <div className="container-recipe">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-serif font-bold text-cedar mb-6 text-center">
                Cooking Conversion Tips
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="h-5 w-5 text-terracotta" />
                    <h3 className="font-medium text-cedar">Dry vs. Liquid Measurements</h3>
                  </div>
                  <p className="text-sm text-cedar/80">
                    For best results, use dry measuring cups for dry ingredients and liquid measuring cups for liquids. Select the specific ingredient when converting between volume and weight.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Calculator className="h-5 w-5 text-terracotta" />
                    <h3 className="font-medium text-cedar">Baking Precision</h3>
                  </div>
                  <p className="text-sm text-cedar/80">
                    Baking requires more precision than cooking. For best results in baking, use weight measurements (grams or ounces) instead of volume when possible.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Clipboard className="h-5 w-5 text-terracotta" />
                    <h3 className="font-medium text-cedar">Converting Whole Recipes</h3>
                  </div>
                  <p className="text-sm text-cedar/80">
                    For best results when converting entire recipes, convert each ingredient separately as densities vary. Use the serving adjustment feature for scaling the entire recipe.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="h-5 w-5 text-terracotta" />
                    <h3 className="font-medium text-cedar">Spice Adjustments</h3>
                  </div>
                  <p className="text-sm text-cedar/80">
                    When scaling recipes up or down, adjust spices and seasonings gradually. Taste as you go, as spice intensity doesn't always scale linearly with other ingredients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Converter;
