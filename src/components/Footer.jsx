import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import logo from "../assets/tm_logo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Logo + Tagline */}
        <div>
          <img src={logo} alt="logo" className="h-12 mb-4" />
          <p className="text-sm">Turning vision into reality through stunning visuals and storytelling.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#f40006] cursor-pointer">Home</li>
            <li className="hover:text-[#f40006] cursor-pointer">About</li>
            <li className="hover:text-[#f40006] cursor-pointer">Our Work</li>
            <li className="hover:text-[#f40006] cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold mb-4">Contact</h3>
          <p className="text-sm">📞 +91 62304 25732</p>
          <p className="text-sm">✉️ arnav@techtonicmxdia.agency</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/techtonicmxdia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-[#f40006]"><FaInstagram size={20} /></a>
            <a href="https://www.linkedin.com/in/arnavae/" className="hover:text-[#f40006]"><FaLinkedinIn size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} TM Studio. All rights reserved.
      </div>
    </footer>
  );
}