
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Cookie } from 'lucide-react';

const Cookies = () => {
  const lastUpdated = "May 15, 2023";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-cream">
        <div className="container-recipe py-12">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Cookie className="h-8 w-8 text-terracotta" />
              <h1 className="text-3xl font-serif font-bold text-cedar">Cookie Policy</h1>
            </div>
            
            <p className="text-sm text-cedar/70 mb-6">Last Updated: {lastUpdated}</p>
            
            <div className="prose prose-cedar max-w-none">
              <p>
                This Cookie Policy explains how FlavorFlux ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website at flavorflux.com ("Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>
              
              <h2>What Are Cookies?</h2>
              <p>
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>
              <p>
                Cookies set by the website owner (in this case, FlavorFlux) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
              </p>
              
              <h2>Why Do We Use Cookies?</h2>
              <p>
                We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Website. Third parties serve cookies through our Website for analytics and other purposes.
              </p>
              
              <h2>Types of Cookies We Use</h2>
              <h3>Essential Cookies</h3>
              <p>
                These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.
              </p>
              
              <h3>Performance and Functionality Cookies</h3>
              <p>
                These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
              </p>
              
              <h3>Analytics and Customization Cookies</h3>
              <p>
                These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you.
              </p>
              
              <h3>Advertising Cookies</h3>
              <p>
                These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.
              </p>
              
              <h3>Social Media Cookies</h3>
              <p>
                These cookies are used to enable you to share pages and content that you find interesting on our Website through third-party social networking and other websites. These cookies may also be used for advertising purposes.
              </p>
              
              <h2>How Can You Control Cookies?</h2>
              <p>
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
              </p>
              <p>
                You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information.
              </p>
              
              <h2>Changes to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>
              <p>
                The date at the top of this Cookie Policy indicates when it was last updated.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about our use of cookies or other technologies, please contact us at:
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

export default Cookies;
