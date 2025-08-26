import {
  Facebook,
  Instagram,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { motion } from "motion/react"

const Footer = () => {
  return (
    <motion.footer className="bg-black text-gray-300 py-10"
     whileInView={{ opacity: [0, 1], y: [100, 0] }}
     transition={{ duration: 0.5 , delay: 0.2 , ease: "easeInOut"}}
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Name */}
        <div>
          <h2 className="text-2xl font-bold text-white">Logo</h2>
          <p className="mt-2 text-gray-400 text-sm">
            Bringing modern design with passion & simplicity.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <div className="mt-4 space-y-2">
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-gray-400" />
              <span>+91 8057189325</span>
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gray-400" />
              <span>Agra Spots</span>
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
