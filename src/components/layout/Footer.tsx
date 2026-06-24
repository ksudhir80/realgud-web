import {
  Phone,
  Mail,
  MapPin,  
} from "lucide-react";


import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,

} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-amber-950 text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>

            <h2 className="text-3xl font-bold text-yellow-400">
              RealGud
            </h2>

            <p className="mt-4 text-gray-300 leading-relaxed">
              Premium Kolhapuri Jaggery Powder
              made using low-temperature steam
              processing for superior taste,
              purity and nutrition.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>
                <a href="#home" className="hover:text-yellow-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#products" className="hover:text-yellow-400">
                  Products
                </a>
              </li>

              <li>
                <a href="#benefits" className="hover:text-yellow-400">
                  Benefits
                </a>
              </li>

              <li>
                <a href="#gallery" className="hover:text-yellow-400">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-yellow-400">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Products */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Our Products
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>Kolhapuri Jaggery Powder</li>
              <li>Organic Jaggery</li>
              <li>Natural Sweetener</li>
              <li>Bulk Supply</li>
              <li>Distributor Orders</li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-300">

              <div className="flex gap-3">
                <MapPin size={18} />
                <span>
                  A/P Mangaon,
                  Tal: Hatkanangale,
                  Dist: Kolhapur
                </span>
              </div>

              <div className="flex gap-3">
                <Phone size={18} />
                <a
                  href="tel:+917219555376"
                  className="hover:text-yellow-400"
                >
                  +91 72195 55376
                </a>
              </div>

              <div className="flex gap-3">
                <Mail size={18} />
                <a
                  href="mailto:cosmic.nutri@gmail.com"
                  className="hover:text-yellow-400"
                >
                  cosmic.nutri@gmail.com
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-amber-800" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 py-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} RealGud.
            All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">

            <a
              href="#"
              className="
              p-2
              rounded-full
              bg-amber-800
              hover:bg-yellow-500
              transition
              "
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="#"
              className="
              p-2
              rounded-full
              bg-amber-800
              hover:bg-yellow-500
              transition
              "
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="
              p-2
              rounded-full
              bg-amber-800
              hover:bg-yellow-500
              transition
              "
            >
              <FaLinkedinIn size={18} />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}