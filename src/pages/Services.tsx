
import Layout from '../components/Layout';
import ServiceCards from '../components/ServiceCards';
import { CircleCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const benefits = [
    {
      title: "Clear Technical Insights",
      description: "We translate complex technical details into business-relevant insights that enable informed decision-making."
    },
    {
      title: "Risk Identification",
      description: "Our thorough assessment reveals technical risks and limitations that may impact investment returns."
    },
    {
      title: "Speed to Decision",
      description: "Our streamlined process delivers actionable insights when you need them, without compromising quality."
    },
    {
      title: "Technical Differentiation",
      description: "We help you identify true technical advantages that create sustainable competitive edges."
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <div className="pt-20 bg-aletheium-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300">
              Comprehensive technical due diligence services tailored to meet the needs of investors in AI and deeptech.
            </p>
          </div>
        </div>
      </div>
      
      {/* Service Cards */}
      <ServiceCards />
      
      {/* Process Section */}
      <div className="bg-aletheium-light py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-aletheium-navy mb-4">Our Process</h2>
            <p className="text-aletheium-gray max-w-2xl mx-auto">
              We follow a structured yet flexible approach to technical due diligence, ensuring thorough assessment while meeting your investment timeline.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md relative">
                <div className="bg-aletheium-navy w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-4">1</div>
                <h3 className="text-xl font-bold text-aletheium-navy mb-2">Discovery</h3>
                <p className="text-aletheium-gray text-sm">Understanding your investment objectives and the specific technology to be evaluated.</p>
                
                {/* Connector Line */}
                <div className="hidden md:block absolute top-10 -right-3 w-6 h-0.5 bg-aletheium-teal"></div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md relative">
                <div className="bg-aletheium-navy w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-4">2</div>
                <h3 className="text-xl font-bold text-aletheium-navy mb-2">Assessment</h3>
                <p className="text-aletheium-gray text-sm">Thorough technical evaluation by our experts and specialized SME collaborators.</p>
                
                {/* Connector Lines */}
                <div className="hidden md:block absolute top-10 -left-3 w-6 h-0.5 bg-aletheium-teal"></div>
                <div className="hidden md:block absolute top-10 -right-3 w-6 h-0.5 bg-aletheium-teal"></div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md relative">
                <div className="bg-aletheium-navy w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-4">3</div>
                <h3 className="text-xl font-bold text-aletheium-navy mb-2">Analysis</h3>
                <p className="text-aletheium-gray text-sm">Converting technical findings into business-relevant insights and recommendations.</p>
                
                {/* Connector Lines */}
                <div className="hidden md:block absolute top-10 -left-3 w-6 h-0.5 bg-aletheium-teal"></div>
                <div className="hidden md:block absolute top-10 -right-3 w-6 h-0.5 bg-aletheium-teal"></div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md relative">
                <div className="bg-aletheium-navy w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-4">4</div>
                <h3 className="text-xl font-bold text-aletheium-navy mb-2">Delivery</h3>
                <p className="text-aletheium-gray text-sm">Presenting clear findings and recommendations to inform your investment decision.</p>
                
                {/* Connector Line */}
                <div className="hidden md:block absolute top-10 -left-3 w-6 h-0.5 bg-aletheium-teal"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Benefits Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-aletheium-navy mb-4">The Aletheium360 Advantage</h2>
            <p className="text-aletheium-gray max-w-2xl mx-auto">
              Our unique approach to technical due diligence provides investors with clear, actionable insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <span className="text-aletheium-teal mr-4 mt-1">
                  <CircleCheck size={24} />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-aletheium-navy mb-2">{benefit.title}</h3>
                  <p className="text-aletheium-gray">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link 
              to="/contact" 
              className="bg-aletheium-navy hover:bg-aletheium-dark text-white font-medium px-8 py-3 rounded-md transition duration-200"
            >
              Contact Us for Custom Quote
            </Link>
            <p className="text-sm text-aletheium-gray/70 mt-4">
              * Aletheium360 does not provide financial advice; our services focus exclusively on technical assessment.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
