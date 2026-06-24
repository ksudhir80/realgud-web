import product3 from "../../assets/images/product3.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-[90vh] flex items-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${product3})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl text-white">

          <span className="bg-yellow-600 px-4 py-2 rounded-full text-sm font-medium">
            100% Natural Kolhapuri Jaggery
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
            RealGud
            <span className="block text-yellow-400">
              Jaggery Powder
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Chemical Free • No Added Sugar • No Sulphur
            • Rich In Iron, Calcium & Essential Minerals
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#contact"
              className="bg-yellow-600 hover:bg-yellow-700 px-8 py-4 rounded-lg font-semibold transition"
            >
              Contact To Buy
            </a>

            <a
              href="https://wa.me/917219555376"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold transition"
            >
              WhatsApp Inquiry
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;