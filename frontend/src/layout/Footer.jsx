import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & About */}
          <div>
            <Link to="/" className="text-2xl font-bold mb-4 block">
              Stay<span className="text-blue-400">Nest</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Find your perfect home with StayNest. We help you discover the
              best properties for rent, sale, and stay.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/listing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Listing
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} />
                <span className="text-sm">Flower pot, Spintex Road, Accra</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={18} />
                <Link
                  to="tel:+233123456789"
                  className="hover:text-white transition-colors text-sm"
                >
                  +233 24 125 9984
                </Link>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} />
                <Link
                  to="mailto:info@staynest.com"
                  className="hover:text-white transition-colors text-sm"
                >
                  info@staynest.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <Link
                to="/facebook"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <FaFacebook size={18} />
              </Link>
              <Link
                to="/twitter"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors"
              >
                <FaTwitter size={18} />
              </Link>
              <Link
                to="/instagram"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <FaInstagram size={18} />
              </Link>
              <Link
                to="/linkedin"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <FaLinkedin size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} StayNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
