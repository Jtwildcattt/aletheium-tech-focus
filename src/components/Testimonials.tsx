
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <div className="bg-aletheium-light py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-aletheium-navy mb-4">Why Choose Us</h2>
          <p className="text-aletheium-gray max-w-2xl mx-auto">
            Trusted by investors to provide clarity and confidence in technical evaluations.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-10 relative animate-fade-in">
          <div className="absolute -top-5 left-10 text-aletheium-teal bg-white rounded-full p-3 shadow-md">
            <Quote size={32} />
          </div>
          
          <blockquote className="mt-4">
            <p className="text-lg md:text-xl text-aletheium-gray italic mb-6">
              "Aletheium360's deep technical assessment gave us the confidence to move forward with our AI investment. Their ability to translate complex technology into clear business implications was invaluable to our decision-making process."
            </p>
            <footer className="flex items-center">
              <div className="bg-aletheium-navy text-white h-12 w-12 rounded-full flex items-center justify-center mr-4">
                <span className="font-bold">SE</span>
              </div>
              <div>
                <p className="font-bold text-aletheium-navy">Svein Erik Sogn</p>
                <p className="text-sm text-aletheium-gray">Investment Partner</p>
              </div>
            </footer>
          </blockquote>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
            <div className="bg-aletheium-navy inline-block p-3 rounded-lg text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-aletheium-navy mb-2">Speed</h3>
            <p className="text-aletheium-gray">
              Our high-speed, conviction-driven process delivers insights when you need them most, without compromising quality.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
            <div className="bg-aletheium-navy inline-block p-3 rounded-lg text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-aletheium-navy mb-2">Technical Depth</h3>
            <p className="text-aletheium-gray">
              We dive deep into the technical aspects of AI and deeptech to uncover insights others might miss.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
            <div className="bg-aletheium-navy inline-block p-3 rounded-lg text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-aletheium-navy mb-2">Expert Collaboration</h3>
            <p className="text-aletheium-gray">
              Our network of domain specialists ensures you receive insights from true experts in each technological field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
