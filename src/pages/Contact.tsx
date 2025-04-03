
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We've received your message and will get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-cream py-12">
          <div className="container-recipe">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-cedar mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-cedar/80 mb-6">
                Have questions, feedback, or suggestions? We'd love to hear from you!
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-12">
          <div className="container-recipe">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                    <h2 className="text-xl font-serif font-bold text-cedar mb-6">
                      Get In Touch
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-terracotta mt-1" />
                        <div>
                          <h3 className="font-medium text-cedar">Email</h3>
                          <p className="text-sm text-cedar/80">hello@flavorflux.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-terracotta mt-1" />
                        <div>
                          <h3 className="font-medium text-cedar">Phone</h3>
                          <p className="text-sm text-cedar/80">(555) 123-4567</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-terracotta mt-1" />
                        <div>
                          <h3 className="font-medium text-cedar">Address</h3>
                          <p className="text-sm text-cedar/80">
                            123 Recipe Lane<br />
                            Foodville, CA 90210
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-serif font-bold text-cedar mb-6">
                      Send a Message
                    </h2>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-cedar mb-1">
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="input-recipe w-full rounded-md"
                            placeholder="John Doe"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-cedar mb-1">
                            Your Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="input-recipe w-full rounded-md"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="subject" className="block text-sm font-medium text-cedar mb-1">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="input-recipe w-full rounded-md"
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Feature Request">Feature Request</option>
                          <option value="Bug Report">Bug Report</option>
                          <option value="Feedback">Feedback</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-cedar mb-1">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="input-recipe w-full rounded-md"
                          placeholder="Your message here..."
                        ></textarea>
                      </div>
                      
                      <button
                        type="submit"
                        className="btn-recipe w-full flex items-center justify-center gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="h-4 w-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="bg-cream py-12">
          <div className="container-recipe">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-serif font-bold text-cedar mb-8 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="font-medium text-cedar text-lg mb-2">
                    How accurate are the recipe conversions?
                  </h3>
                  <p className="text-cedar/80">
                    Our conversion algorithms are based on standard culinary measurement ratios and ingredient-specific density data. For most common ingredients, the accuracy is very high. For specialized ingredients, using the ingredient selector will provide the best results.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="font-medium text-cedar text-lg mb-2">
                    Can I convert between volume and weight?
                  </h3>
                  <p className="text-cedar/80">
                    Yes, you can convert between volume measurements (cups, tablespoons, etc.) and weight measurements (grams, ounces, etc.) by selecting an ingredient from the dropdown. This is because different ingredients have different densities.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="font-medium text-cedar text-lg mb-2">
                    Do I need to create an account to use the converter?
                  </h3>
                  <p className="text-cedar/80">
                    No, the recipe converter is free to use without requiring any account creation or login. Just visit the converter page and start using it right away.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="font-medium text-cedar text-lg mb-2">
                    Can I suggest a new feature or ingredient?
                  </h3>
                  <p className="text-cedar/80">
                    Absolutely! We're always looking to improve. Use the contact form above to send us your suggestions for new features, ingredients, or any other improvements you'd like to see.
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

export default Contact;
