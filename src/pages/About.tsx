
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Utensils, Users, Heart, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-cream py-12">
          <div className="container-recipe">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-cedar mb-4">
                About FlavorFlux
              </h1>
              <p className="text-lg text-cedar/80 mb-6">
                The story behind our mission to make cooking and baking easier for everyone.
              </p>
            </div>
          </div>
        </section>
        
        {/* Story Section */}
        <section className="py-12">
          <div className="container-recipe">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg">
                <h2 className="text-2xl font-serif font-bold text-cedar">Our Story</h2>
                <p>
                  FlavorFlux was born out of a simple yet common frustration: trying to follow a recipe with measurements in an unfamiliar system, or adjusting serving sizes without messing up the proportions.
                </p>
                <p>
                  Our founder, an enthusiastic home cook, found herself constantly googling conversion rates while cooking, slowing down the process and sometimes leading to cooking mishaps. She thought, "There has to be a better way!"
                </p>
                <p>
                  After talking to friends and family who experienced the same challenges, she assembled a team of culinary enthusiasts and developers to create FlavorFlux – a simple, accurate, and user-friendly recipe conversion tool.
                </p>
                <p>
                  Today, our mission is to remove barriers in the kitchen and make cooking more accessible to everyone, regardless of which measurement system you're used to or how many people you're cooking for.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-terracotta/10 h-10 w-10 rounded-full flex items-center justify-center">
                      <Utensils className="h-5 w-5 text-terracotta" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-cedar">Our Mission</h3>
                  </div>
                  <p className="text-cedar/80">
                    To make cooking and baking more accessible by removing measurement barriers and simplifying recipe conversions for home cooks around the world.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-terracotta/10 h-10 w-10 rounded-full flex items-center justify-center">
                      <Target className="h-5 w-5 text-terracotta" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-cedar">Our Values</h3>
                  </div>
                  <p className="text-cedar/80">
                    Accuracy, simplicity, and accessibility drive everything we do. We believe cooking should be a joyful experience for everyone, regardless of math skills or measurement preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="bg-cedar text-white py-12">
          <div className="container-recipe">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold mb-8">The Team Behind FlavorFlux</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-terracotta/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-terracotta" />
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-1">Sarah Johnson</h3>
                  <p className="text-white/80 text-sm">Founder & Chef</p>
                </div>
                
                <div className="text-center">
                  <div className="w-24 h-24 bg-terracotta/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-terracotta" />
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-1">Michael Chen</h3>
                  <p className="text-white/80 text-sm">Lead Developer</p>
                </div>
                
                <div className="text-center">
                  <div className="w-24 h-24 bg-terracotta/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-terracotta" />
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-1">Emily Rodriguez</h3>
                  <p className="text-white/80 text-sm">Culinary Scientist</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-12">
          <div className="container-recipe">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-serif font-bold text-cedar mb-8 text-center">
                What People Are Saying
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex text-terracotta mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Heart key={i} className="h-5 w-5 fill-terracotta" />
                    ))}
                  </div>
                  <p className="text-cedar/80 italic mb-4">
                    "FlavorFlux has been a life-saver for my international cooking adventures. No more confusion between cups and grams, and now I can easily adjust recipes for dinner parties!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="bg-terracotta/10 h-10 w-10 rounded-full flex items-center justify-center">
                      <span className="text-terracotta font-bold">JD</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-cedar">Jessica D.</h3>
                      <p className="text-sm text-cedar/70">Home Cook</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex text-terracotta mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Heart key={i} className="h-5 w-5 fill-terracotta" />
                    ))}
                  </div>
                  <p className="text-cedar/80 italic mb-4">
                    "As a professional baker, precision is everything. This tool has made it so much easier to scale recipes up and down for different occasions. The ingredient-specific conversions are spot on!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="bg-terracotta/10 h-10 w-10 rounded-full flex items-center justify-center">
                      <span className="text-terracotta font-bold">MT</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-cedar">Mark T.</h3>
                      <p className="text-sm text-cedar/70">Professional Baker</p>
                    </div>
                  </div>
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

export default About;
