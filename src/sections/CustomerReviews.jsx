import Review from "../components/Review"
import { reviews } from "../constants"
const CustomerReviews = () => {
  return (
    <section id="customer-reviews" className="max-container ">  
    <h3 className="font-palanquin text-center text-4xl font-bold">
      What Our
    <span className="text-coral-red"> Customers </span>
    Say?
    </h3>
    <p className="info-text m-auto mt-4 max-w-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure incidunt qui ad laborum, cupiditate ipsum sit esse iusto in laboriosam!</p>
    <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14"></div>
    {reviews.map((review)=>(
      <Review key={review.customerName}
      imgURL={review.imgURL}
      customerName={review.customerName}
      rating={review.rating}
      feedback={review.feedback}
      />
    ))}
    </section>
  )
}

export default CustomerReviews