const features = [
  {
    title: "100% Chemical Free",
    description:
      "No chemicals, preservatives or artificial additives.",
  },
  {
    title: "No Added Sugar",
    description:
      "Only pure jaggery powder.",
  },
  {
    title: "No Sulphur",
    description:
      "Natural processing retains quality.",
  },
  {
    title: "Low Temperature Processing",
    description:
      "Steam and vacuum evaporation technology.",
  },
];

import product5 from "../../assets/images/product5.jpg";


export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-amber-800">
          Product Features
        </h2>
<img
  src={product5}
  alt="Why RealGud"
  className="rounded-xl shadow-lg"
/>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white shadow-lg rounded-xl p-6 hover:-translate-y-2 transition"
            >
              <h3 className="font-bold text-xl text-amber-700">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}