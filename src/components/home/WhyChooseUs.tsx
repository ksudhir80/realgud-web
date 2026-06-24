import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
export default function WhyRealGud() {
  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose RealGud?
        </h2>
<img
  src={product1}
  alt="Why RealGud"
  className="rounded-xl shadow-lg"
/>
<img
  src={product2}
  alt="Why RealGud"
  className="rounded-xl shadow-lg"
/>
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-red-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-red-600 mb-5">
              Other Brands
            </h3>

            <ul className="space-y-4">
              <li>❌ Open Pan Processing</li>
              <li>❌ Nutrient Loss</li>
              <li>❌ Poor Taste</li>
              <li>❌ Sugar Adulteration</li>
              <li>❌ Preservatives</li>
            </ul>
          </div>

          <div className="bg-green-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-green-700 mb-5">
              RealGud
            </h3>

            <ul className="space-y-4">
              <li>✅ Stainless Steel Closed Vessels</li>
              <li>✅ 125°C Steam Processing</li>
              <li>✅ No Chemicals</li>
              <li>✅ No Added Sugar</li>
              <li>✅ Preserves Micronutrients</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}