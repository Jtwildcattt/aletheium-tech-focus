
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-aletheium-navy via-aletheium-navy to-aletheium-dark pt-20">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-center bg-no-repeat opacity-5 bg-cover mix-blend-overlay"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
            Confidence in Complexity: De-risking Innovative AI & Deeptech Investments
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We simplify technical due diligence for investors, ensuring clarity in cutting-edge tech investments.
          </p>
          <Link 
            to="/contact" 
            className="bg-aletheium-teal hover:bg-aletheium-teal/90 text-white font-medium px-6 py-3 rounded-md inline-flex items-center group transition duration-200 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            Contact Us to De-Risk Your Investments
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
          </Link>
        </div>
      </div>
      
      {/* Decorative wave pattern at bottom */}
      <div className="h-16 md:h-24 bg-white w-full overflow-hidden">
        <svg 
          viewBox="0 0 1440 120" 
          className="w-full h-full transform translate-y-1"
          preserveAspectRatio="none"
          fill="#0A2342" 
        >
          <path d="M0,0 C240,100 480,120 720,100 C960,80 1200,40 1440,0 L1440,120 L0,120 Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
