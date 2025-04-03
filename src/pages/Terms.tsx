
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText } from 'lucide-react';

const Terms = () => {
  const lastUpdated = "May 15, 2023";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-cream">
        <div className="container-recipe py-12">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-8 w-8 text-terracotta" />
              <h1 className="text-3xl font-serif font-bold text-cedar">Terms of Service</h1>
            </div>
            
            <p className="text-sm text-cedar/70 mb-6">Last Updated: {lastUpdated}</p>
            
            <div className="prose prose-cedar max-w-none">
              <p>
                Welcome to FlavorFlux! These Terms of Service ("Terms") govern your use of our website located at flavorflux.com (the "Service") operated by FlavorFlux.
              </p>
              <p>
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
              </p>
              
              <h2>Use of the Service</h2>
              <p>
                FlavorFlux provides a recipe converter tool that allows users to convert recipe measurements between different units and adjust serving sizes.
              </p>
              <p>
                You are responsible for your use of the Service and for any content you provide, including compliance with applicable laws, rules, and regulations.
              </p>
              
              <h2>Accuracy of Information</h2>
              <p>
                While we strive to provide accurate conversion results, we make no guarantees about the accuracy of our conversion calculations. Cooking and baking are both art and science, and many factors can affect the outcome of a recipe beyond simple measurement conversions.
              </p>
              <p>
                The Service is provided for informational purposes only. You acknowledge that you use the conversion results at your own risk.
              </p>
              
              <h2>Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of FlavorFlux and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
              </p>
              <p>
                Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of FlavorFlux.
              </p>
              
              <h2>User Content</h2>
              <p>
                If applicable, our Service may allow you to post, link, store, share and otherwise make available certain information, text, or other material ("Content"). You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness.
              </p>
              <p>
                By posting Content to the Service, you grant us the right and license to use, modify, perform, display, reproduce, and distribute such material on and through the Service.
              </p>
              
              <h2>Links To Other Web Sites</h2>
              <p>
                Our Service may contain links to third-party web sites or services that are not owned or controlled by FlavorFlux.
              </p>
              <p>
                FlavorFlux has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that FlavorFlux shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
              </p>
              
              <h2>Termination</h2>
              <p>
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p>
                All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
              </p>
              
              <h2>Disclaimer</h2>
              <p>
                Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
              </p>
              
              <h2>Limitation of Liability</h2>
              <p>
                In no event shall FlavorFlux, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
              </p>
              
              <h2>Changes</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us:
              </p>
              <address>
                FlavorFlux<br />
                123 Recipe Lane<br />
                Foodville, CA 90210<br />
                Email: legal@flavorflux.com<br />
                Phone: (555) 123-4567
              </address>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
