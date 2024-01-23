import Banner from "../Banner/Banner"
import Hero from "../Hero/Hero"
import Products from "../Products/Products"
import Subscribe from "../Subscribe/Subscribe"
import Testimonials from "../Testimonials/Testimonials"
import TopProducts from "../TopProducts/TopProducts"

const Home = () => {
  return (
    <div>
        
           <Hero />
            <TopProducts />
            <Banner />
            <Subscribe />
            <Products />
            <Testimonials />
    </div>
  )
}

export default Home