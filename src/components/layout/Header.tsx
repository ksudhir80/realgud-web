import { Menu, Phone } from "lucide-react";

export default function Header() {
  return (
    
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-amber-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center gap-3">

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

          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">

            <a
              href="home"
              className="font-medium text-gray-700 hover:text-amber-600 transition duration-300"
            >
              Home
            </a>

            <a
              href="products"
              className="font-medium text-gray-700 hover:text-amber-600 transition duration-300"
            >
              Products
            </a>

            <a
              href="benefits"
              className="font-medium text-gray-700 hover:text-amber-600 transition duration-300"
            >
              Benefits
            </a>

            <a
              href="gallery"
              className="font-medium text-gray-700 hover:text-amber-600 transition duration-300"
            >
              Gallery
            </a>

            <a
              href="contact"
              className="font-medium text-gray-700 hover:text-amber-600 transition duration-300"
            >
              Contact
            </a>

          </nav>

          {/* CTA */}
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
              className="
                bg-gradient-to-r
                from-green-500
                to-green-600
                text-white
                px-5
                py-3
                rounded-full
                shadow-lg
                hover:scale-105
                transition
                flex
                items-center
                gap-2
              "
            >
              <Phone size={16} />
              WhatsApp
            </a>

          </div>

          {/* Mobile Menu */}
          <button className="md:hidden">
            <Menu size={28} />
          </button>

        </div>

      </div>
    </header>
  );
}