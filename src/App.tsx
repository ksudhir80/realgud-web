import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

import {
  Routes,
  Route
} from "react-router-dom";
import Gallery from "./pages/Gallery";
import WhyRealGud from "./components/home/WhyChooseUs";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
    <div className="bg-gradient-to-r from-amber-700 to-yellow-500 text-white text-center py-2 text-sm font-medium">
  🌿 100% Chemical Free • No Added Sugar • Free Delivery on Bulk Orders
</div>
      <Header />

      <Routes>
 <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/Home"
          element={<Home />}
        />

        <Route
          path="/products"
          element={<Products />}
        />
 <Route
          path="/benefits"
          element={<WhyRealGud />}
        />

        <Route
          path="/gallery"
          element={<Gallery />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>
      <a
  href="https://wa.me/917219555376"
  target="_blank"
  rel="noopener noreferrer"
  className="
    fixed
    bottom-6
    right-6
    bg-green-500
    hover:bg-green-600
    text-white
    px-5
    py-3
    rounded-full
    shadow-xl
    z-50
  "
>
  WhatsApp Us
</a>
        <Footer />
    </>
  );
}

export default App;