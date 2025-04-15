import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-aletheium-navy text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Aletheium360</h3>
            <p className="text-gray-300 mb-4">
              De-risking innovative AI & deeptech investments through expert technical due diligence.
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="mailto:jenny@nytrogen.ca" 
                className="text-gray-300 hover:text-aletheium-teal transition duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-aletheium-teal transition duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-aletheium-teal transition duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-aletheium-teal transition duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-aletheium-teal transition duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">
              <strong>Email:</strong> jenny@nytrogen.ca
            </p>
            <Link to="/contact" className="bg-aletheium-teal text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition duration-200 inline-block">
              Schedule a Consultation
            </Link>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="border-t border-gray-700 pt-6 mt-8">
          <p className="text-sm text-gray-400 mb-2">
            Aletheium360 does not provide financial advice; consultations are technical only.
          </p>
          <p className="text-sm text-gray-400">
            © {currentYear} Aletheium360. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
