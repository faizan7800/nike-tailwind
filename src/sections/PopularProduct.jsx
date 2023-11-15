import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"

const PopularProduct = () => {
  return (
   <section id="products" className="max-container max max-sm:mt-12">
    <div className="flex flex-col justify-start gap-5">
      <h2 className=" text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
      <p className="lg:max-w-lg mt-12 font-montserrat text-slate-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sunt excepturi obcaecati, quos facere aliquam possimus expedita libero nobis nisi. Quo, repellat earum aliquam sit distinctio saepe incidunt deleniti provident nisi expedita mollitia at, ut eos et veritatis delectus, autem maxime velit unde. Velit.</p>
    </div>
    <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 max-sm:ml-auto max-sm:mr-auto max-sm:w-2/3">
      {products.map((product)=>(
        <PopularProductCard key={product.name} {...product}/>
      ))}
    </div>
   </section>
  )
}

export default PopularProduct