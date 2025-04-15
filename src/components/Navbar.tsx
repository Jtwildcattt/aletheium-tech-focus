
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-aletheium-navy">Aletheium360</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-aletheium-gray hover:text-aletheium-teal px-3 py-2 rounded-md text-sm font-medium transition duration-200">
                Home
              </Link>
              <Link to="/about" className="text-aletheium-gray hover:text-aletheium-teal px-3 py-2 rounded-md text-sm font-medium transition duration-200">
                About Us
              </Link>
              <Link to="/services" className="text-aletheium-gray hover:text-aletheium-teal px-3 py-2 rounded-md text-sm font-medium transition duration-200">
                Services
              </Link>
              <Link to="/contact" className="bg-aletheium-teal text-white hover:bg-aletheium-navy px-4 py-2 rounded-md text-sm font-medium transition duration-200">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-aletheium-gray p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/" 
                className="text-aletheium-gray hover:text-aletheium-teal block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-aletheium-gray hover:text-aletheium-teal block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className="text-aletheium-gray hover:text-aletheium-teal block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className="bg-aletheium-teal text-white block px-3 py-2 rounded-md text-base font-medium mt-4"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
