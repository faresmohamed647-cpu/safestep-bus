import { Link } from 'react-router';
import { Bus, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0f14] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Bus className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                BusTracker Pro
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Professional school bus tracking system for modern educational institutions. 
              Real-time monitoring, safety, and peace of mind.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-blue-600/20 hover:text-blue-400 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-blue-600/20 hover:text-blue-400 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-blue-600/20 hover:text-blue-400 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-blue-600/20 hover:text-blue-400 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">About Us</Link></li>
              <li><Link to="/features" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Features</Link></li>
              <li><Link to="/how-it-works" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">How It Works</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/tracking" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Live Tracking</Link></li>
              <li><Link to="/dashboard" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Dashboard</Link></li>
              <li><Link to="/drivers" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Drivers Management</Link></li>
              <li><Link to="/students" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Students Management</Link></li>
              <li><Link to="/parents" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Parents Portal</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>123 Education Street, Tech City, TC 12345</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>info@bustracker.pro</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} BusTracker Pro. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/faq" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                FAQ
              </Link>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
