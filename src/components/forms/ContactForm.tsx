import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  mobile: string;
  city: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);

    const message = `
Name: ${data.name}
Mobile: ${data.mobile}
City: ${data.city}
Requirement: ${data.message}
`;

    window.open(
      `https://wa.me/917219555376?text=${encodeURIComponent(
        message
      )}`
    );

    reset();
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-100"
    >
      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Contact Us
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow"
        >

          <input
            {...register("name")}
            placeholder="Name"
            className="w-full border p-3 rounded mb-4"
          />

          <input
            {...register("mobile")}
            placeholder="Mobile Number"
            className="w-full border p-3 rounded mb-4"
          />

          <input
            {...register("city")}
            placeholder="City"
            className="w-full border p-3 rounded mb-4"
          />

          <textarea
            {...register("message")}
            rows={5}
            placeholder="Your Requirement"
            className="w-full border p-3 rounded mb-4"
          />

          <button
            type="submit"
            className="w-full bg-amber-700 text-white py-4 rounded-lg"
          >
            Submit Inquiry
          </button>

        </form>

      </div>
    </section>
  );
}