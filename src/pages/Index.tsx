
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ServiceCards from '../components/ServiceCards';
import Testimonials from '../components/Testimonials';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      <Hero />
      
      {/* Services Preview */}
      <ServiceCards />
      
      {/* Testimonials & Why Choose Us */}
      <Testimonials />
      
      {/* Final CTA */}
      <div className="bg-aletheium-navy py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Invest with Confidence?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let Aletheium360 guide your next move with expert technical due diligence.
          </p>
          <Link 
            to="/contact" 
            className="bg-aletheium-teal hover:bg-aletheium-teal/90 text-white font-medium px-8 py-3 rounded-md inline-flex items-center group transition duration-200"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
