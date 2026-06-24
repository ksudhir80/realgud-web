import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-amber-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              RG
            </div>

            <div>
              <h1 className="text-3xl font-extrabold text-amber-800 tracking-wide">
                RealGud
              </h1>

              <p className="text-xs text-gray-500">
                Pure Kolhapuri Jaggery
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/home" className="font-medium text-gray-700 hover:text-amber-600">
              Home
            </Link>

            <Link to="/products" className="font-medium text-gray-700 hover:text-amber-600">
              Products
            </Link>

            <Link to="/benefits" className="font-medium text-gray-700 hover:text-amber-600">
              Benefits
            </Link>

            <Link to="/gallery" className="font-medium text-gray-700 hover:text-amber-600">
              Gallery
            </Link>

            <Link to="/contact" className="font-medium text-gray-700 hover:text-amber-600">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+917219555376"
              className="text-sm font-semibold text-gray-700"
            >
              📞 7219555376
            </a>

            <a
              href="https://wa.me/917219555376"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transition flex items-center gap-2"
            >
              <Phone size={16} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-amber-100">
            <nav className="flex flex-col gap-4">

              <Link
                to="/home"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 font-medium"
              >
                Home
              </Link>

              <Link
                to="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 font-medium"
              >
                Products
              </Link>

              <Link
                to="/benefits"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 font-medium"
              >
                Benefits
              </Link>

              <Link
                to="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 font-medium"
              >
                Gallery
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 font-medium"
              >
                Contact
              </Link>

              <a
                href="tel:+917219555376"
                className="font-semibold text-gray-700"
              >
                📞 7219555376
              </a>

              <a
                href="https://wa.me/917219555376"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white py-3 rounded-lg text-center font-semibold"
              >
                WhatsApp
              </a>

            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
