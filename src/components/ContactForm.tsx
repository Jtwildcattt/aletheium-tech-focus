
import { useState } from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-aletheium-navy mb-6">Contact Us</h2>
            <p className="text-aletheium-gray mb-10">
              Ready to de-risk your AI and deeptech investments? Get in touch with our team to schedule a consultation.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-aletheium-teal text-white p-3 rounded-full mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-aletheium-navy">Email</h3>
                  <a href="mailto:jenny@aletheium360.com" className="text-aletheium-gray hover:text-aletheium-teal transition-colors duration-200">
                    jenny@aletheium360.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-aletheium-teal text-white p-3 rounded-full mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-aletheium-navy">Phone</h3>
                  <a href="tel:+4745662387" className="text-aletheium-gray hover:text-aletheium-teal transition-colors duration-200">
                    +47 456 62 387
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-aletheium-teal text-white p-3 rounded-full mr-4">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-aletheium-navy">WhatsApp</h3>
                  <a href="https://wa.me/4745662387" className="text-aletheium-gray hover:text-aletheium-teal transition-colors duration-200">
                    +47 456 62 387
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-aletheium-navy mb-6">Schedule a Consultation</h3>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md mb-6">
                Thank you for reaching out! We'll get back to you shortly.
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-aletheium-gray mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aletheium-teal"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-aletheium-gray mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aletheium-teal"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-aletheium-gray mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aletheium-teal"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-aletheium-gray mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aletheium-teal"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-aletheium-gray mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aletheium-teal"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-aletheium-navy text-white font-medium py-3 rounded-md transition duration-200 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-aletheium-dark'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
