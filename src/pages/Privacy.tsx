
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield } from 'lucide-react';

const Privacy = () => {
  const lastUpdated = "May 15, 2023";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-cream">
        <div className="container-recipe py-12">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-terracotta" />
              <h1 className="text-3xl font-serif font-bold text-cedar">Privacy Policy</h1>
            </div>
            
            <p className="text-sm text-cedar/70 mb-6">Last Updated: {lastUpdated}</p>
            
            <div className="prose prose-cedar max-w-none">
              <p>
                At FlavorFlux, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
              
              <h2>Information We Collect</h2>
              <p>
                We may collect information about you in a variety of ways. The information we may collect via the Website includes:
              </p>
              <ul>
                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name and email address, that you voluntarily give to us when you choose to participate in various activities related to the Website, such as contacting us via the contact form.</li>
                <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Website, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Website.</li>
                <li><strong>Usage Data:</strong> We may collect information about your usage patterns when you use our conversion tools, including which units you convert between most frequently.</li>
              </ul>
              
              <h2>Use of Your Information</h2>
              <p>
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Website to:
              </p>
              <ul>
                <li>Create and manage your account if you choose to create one.</li>
                <li>Email you regarding your account or order if applicable.</li>
                <li>Respond to your queries and customer service requests.</li>
                <li>Increase the efficiency and operation of the Website.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the Website.</li>
                <li>Perform other business activities as needed.</li>
              </ul>
              
              <h2>Disclosure of Your Information</h2>
              <p>
                We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
              </p>
              <ul>
                <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
                <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
              </ul>
              
              <h2>Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
              
              <h2>Cookies and Web Beacons</h2>
              <p>
                We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Website to help customize the Website and improve your experience. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Website.
              </p>
              
              <h2>Options Regarding Your Information</h2>
              <p>
                You may at any time review or change the information in your account or terminate your account by:
              </p>
              <ul>
                <li>Logging into your account settings and updating your account.</li>
                <li>Contacting us using the contact information provided below.</li>
              </ul>
              <p>
                Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with legal requirements.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <address>
                FlavorFlux<br />
                123 Recipe Lane<br />
                Foodville, CA 90210<br />
                Email: privacy@flavorflux.com<br />
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

export default Privacy;
