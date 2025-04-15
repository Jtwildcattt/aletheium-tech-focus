
import { Briefcase, Calendar, FileSearch } from 'lucide-react';
import { Link } from 'react-router-dom';

type ServiceCardProps = {
  title: string;
  pricing: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
};

const ServiceCard = ({ title, pricing, description, features, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border border-gray-100 animate-fade-in">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-bold text-aletheium-navy mb-2">{title}</h3>
          <p className="text-aletheium-teal font-medium">{pricing}</p>
        </div>
        <div className="text-aletheium-teal bg-blue-50 p-3 rounded-full">
          {icon}
        </div>
      </div>
      <p className="text-aletheium-gray mb-6">{description}</p>
      <ul className="space-y-2 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-aletheium-teal mr-2">✓</span>
            <span className="text-aletheium-gray text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Link 
        to="/contact" 
        className="block text-center bg-aletheium-navy hover:bg-aletheium-dark text-white font-medium px-4 py-2 rounded-md transition duration-200"
      >
        Request Quote
      </Link>
    </div>
  );
};

const ServiceCards = () => {
  const services = [
    {
      title: "Technical Advisory",
      pricing: "Custom Quotes Available",
      description: "Expert technical evaluation on a modular, as-needed basis.",
      features: [
        "Modular technical audits",
        "IP portfolio reviews",
        "Human talent assessment",
        "Specialized technical consulting"
      ],
      icon: <Briefcase size={24} />
    },
    {
      title: "Deal-by-Deal Support",
      pricing: "Custom Quotes Available",
      description: "Comprehensive technical due diligence for specific investment opportunities.",
      features: [
        "Full-scope technical diligence",
        "Technology validation",
        "Risk assessment",
        "Detailed technical reporting"
      ],
      icon: <FileSearch size={24} />
    },
    {
      title: "Monthly Retainer",
      pricing: "Custom Quotes Available",
      description: "Ongoing technical support for active investment portfolios.",
      features: [
        "Multi-deal technical support",
        "Portfolio optimization",
        "Market and technology insights",
        "Priority consulting access"
      ],
      icon: <Calendar size={24} />
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-aletheium-navy mb-4">Our Services</h2>
        <p className="text-aletheium-gray max-w-2xl mx-auto">
          We offer flexible engagement models to meet your technical due diligence needs for AI and deeptech investments.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      
      <p className="text-sm text-aletheium-gray/70 text-center mt-8">
        * Aletheium360 does not provide financial advice; consultations are technical only.
      </p>
    </div>
  );
};

export default ServiceCards;
