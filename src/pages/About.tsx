
import Layout from '../components/Layout';
import Mission from '../components/Mission';
import Team from '../components/Team';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      {/* Header */}
      <div className="pt-20 bg-aletheium-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Aletheium360</h1>
            <p className="text-xl text-gray-300">
              We simplify technical due diligence for investors in AI and deeptech, providing clarity, confidence, and conviction in your investment decisions.
            </p>
          </div>
        </div>
      </div>
      
      {/* Mission Section */}
      <Mission />
      
      {/* Team Section */}
      <Team />
      
      {/* CTA */}
      <div className="bg-aletheium-light py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-aletheium-navy mb-6">
            Work With Our Team
          </h2>
          <p className="text-aletheium-gray mb-8 max-w-2xl mx-auto">
            Ready to leverage our expertise for your next AI or deeptech investment? Contact us today to start the conversation.
          </p>
          <Link 
            to="/contact" 
            className="bg-aletheium-teal hover:bg-aletheium-teal/90 text-white font-medium px-6 py-3 rounded-md inline-flex items-center group transition duration-200"
          >
            Get in Touch
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default About;
