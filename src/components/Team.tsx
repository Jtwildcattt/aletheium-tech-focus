
import { Mail, Linkedin } from 'lucide-react';

type TeamMemberProps = {
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
  email?: string;
  linkedin?: string;
};

const TeamMember = ({ name, role, bio, imageUrl, email, linkedin }: TeamMemberProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg group animate-fade-in">
      <div className="aspect-square bg-aletheium-light relative overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-aletheium-navy/10">
            <span className="text-5xl font-bold text-aletheium-navy">
              {name.split(' ').map(part => part[0]).join('')}
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-aletheium-navy">{name}</h3>
        <p className="text-aletheium-teal mb-4">{role}</p>
        <p className="text-aletheium-gray text-sm mb-4">{bio}</p>
        
        <div className="flex space-x-3">
          {email && (
            <a 
              href={`mailto:${email}`} 
              className="text-aletheium-gray hover:text-aletheium-teal transition-colors duration-200"
              aria-label={`Email ${name}`}
            >
              <Mail size={18} />
            </a>
          )}
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-aletheium-gray hover:text-aletheium-teal transition-colors duration-200"
              aria-label={`${name}'s LinkedIn`}
            >
              <Linkedin size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: "Jenny Tang",
      role: "Contact Lead",
      bio: "Jenny leads client engagements and ensures our technical assessments meet investor needs. With a background in both technology and finance, she bridges the gap between technical experts and investment teams.",
      email: "jenny@aletheium360.com"
    },
    {
      name: "Christoffer",
      role: "Subject Matter Expert",
      bio: "Christoffer brings deep expertise in AI technologies and architecture. He specializes in evaluating the technical feasibility and scalability of AI solutions across various domains.",
    },
    {
      name: "Alisha Sharma",
      role: "Expert Collaborator",
      bio: "Alisha is a specialist in deep tech innovation and IP strategy. Her background in both research and commercialization provides valuable insights for technology evaluation and market potential.",
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-aletheium-navy mb-4">Our Team</h2>
        <p className="text-aletheium-gray max-w-2xl mx-auto">
          Meet the experts who will guide you through the complexities of AI and deeptech investments.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
