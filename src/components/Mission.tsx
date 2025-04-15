
import { CircleCheck } from 'lucide-react';

const Mission = () => {
  const coreServices = [
    "Technical Due Diligence",
    "IP Evaluation",
    "Human Talent Assessment",
    "Technology Validation",
    "Risk Analysis",
    "Technical Architecture Review",
    "AI Model Evaluation",
    "Deployment & Scaling Assessment"
  ];

  return (
    <div className="bg-gradient-to-b from-white to-aletheium-light py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-aletheium-navy mb-6">Our Mission</h2>
            <p className="text-lg text-aletheium-gray">
              We address the complex challenges in evaluating AI and deeptech investments by providing clear, actionable insights that bridge the gap between technical innovation and investment value.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-aletheium-navy mb-6">
              Why We Exist
            </h3>
            <p className="text-aletheium-gray mb-6">
              In today's rapidly evolving technological landscape, investors face significant challenges when evaluating the true potential and risks of AI and deeptech investments:
            </p>
            
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="text-aletheium-teal mr-3 mt-1"><CircleCheck size={18} /></span>
                <span className="text-aletheium-gray">
                  <strong>Technical Complexity:</strong> Advanced technologies like AI, machine learning, and quantum computing require specialized knowledge to properly evaluate.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-aletheium-teal mr-3 mt-1"><CircleCheck size={18} /></span>
                <span className="text-aletheium-gray">
                  <strong>Hype vs. Reality:</strong> Distinguishing between transformative innovation and exaggerated claims requires deep technical understanding.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-aletheium-teal mr-3 mt-1"><CircleCheck size={18} /></span>
                <span className="text-aletheium-gray">
                  <strong>Risk Assessment:</strong> Identifying technical risks, implementation challenges, and scaling limitations before they impact investment returns.
                </span>
              </li>
            </ul>
            
            <p className="text-aletheium-gray">
              Aletheium360 was founded to address these challenges by providing rigorous, independent technical due diligence that helps investors make informed decisions with confidence.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-aletheium-navy mb-6 text-center">
              Core Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {coreServices.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg transition-shadow duration-200"
                >
                  <span className="block text-aletheium-navy font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
