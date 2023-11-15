import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffers = () => {
  return (
    <section id="special-offers" className="flex justify-between items-center max-lg:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="" width={773} height={687} className="object-contain w-full"/>
        </div>
        <div className="flex flex-1 flex-col">
    <h2 className="text-4xl font-palanquin capitalize font-bold lg:max-w-lg">
      <span className="text-coral-red">Special </span>
     
       Offer
    </h2>
    <p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim excepturi reprehenderit doloribus dignissimos iusto, laudantium consequatur consequuntur distinctio officiis, architecto optio accusantium, molestiae eligendi nisi adipisci vero! Tenetur error est explicabo vitae obcaecati, dolorum quisquam odio. Enim culpa iusto necessitatibus nam quis, tempora atque.</p>
    <p className="mt-6  lg:max-w-lg info-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ipsa tempore. Modi expedita repudiandae id quam dolor earum adipisci debitis quos consequatur. Dignissimos, minus. Dignissimos ea minima numquam quos debitis fuga dolore laborum dolor ipsam.</p>
    <div className="mt-11 flex flex-wrap gap-4">
    <Button label="Shop now" iconUrl={arrowRight}/> 
    <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray"
    textColor="text-slate-gray"/>
    </div>
      </div>
    </section>
  )
}

export default SpecialOffers