import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import product3 from "../assets/images/product3.jpg";
import product4 from "../assets/images/product4.jpg";
import product5 from "../assets/images/product5.jpg";

export default function Gallery(){
const gallery = [
  product1,
  product2,
  product3,
  product4,
  product5
];
    return (

        <div className="grid md:grid-cols-3 gap-6">

  {gallery.map((image) => (
    <img
      src={image}
      className="
      rounded-xl
      h-80
      w-full
      object-cover
      "
    />
  ))}

</div>
    )
}