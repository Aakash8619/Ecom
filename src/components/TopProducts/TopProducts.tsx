
import { FaStar } from "react-icons/fa";
import "./product.css"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { useNavigate } from "react-router-dom";
import StarRatings from 'react-star-ratings';
import { setCardDetails, setSimilarProducts } from "../../Redux/productInfoSlice";


const TopProducts = () => {
  const selector = useSelector((state:RootState)=>state.allProducts.copyData)
  const product  = useSelector((store:RootState)=>store.allProducts.data)
  const dispatch = useDispatch()
  // console.log(selector);
  const naviget = useNavigate();

  const productClickHandler = (item:APIdataIF)=>{
    naviget("/productInfo" )
    dispatch(setCardDetails(item))
    let sameCat = product.filter((value:APIdataIF)=>value.category == item.category)
    dispatch(setSimilarProducts(sameCat))
  }

  const rating =(value:APIdataIF)=>{
    return(
        <StarRatings
        rating={Math.floor(value.rating.rate)}
        starRatedColor="orange"
        // changeRating={value.changeRating}
        numberOfStars={5}
        name='rating'
        starDimension="30px"
        starSpacing="5px"
      />)
}
  
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap- md:gap-20 place-items-center my-40">
          {selector.map((data:APIdataIF)=> (
            <div
            key={data.id}
            onClick={()=>productClickHandler(data)}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]  "
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.image}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md z-50 object-contain w-3/4 my-10 aspect-video h-48"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                {rating(data)}
                  {/* <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" /> */}
                </div>
                <h1 className="text-xl font-bold line-clamp-1">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  // onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
