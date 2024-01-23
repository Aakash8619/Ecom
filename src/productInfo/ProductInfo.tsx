import { useDispatch, useSelector } from "react-redux"
import store, { RootState } from "../Redux/store"
import { setCardDetails, setSimilarProducts } from "../Redux/productInfoSlice"


const ProductInfo = () => {
    const dispatch = useDispatch()
    const product = useSelector((store:RootState)=>store.allProducts.data)
    const productDetails = useSelector((store: RootState) => store.productInfo.productDetails)
    const sameCategory = useSelector((store:RootState)=> store.productInfo.similarProducts)
    // const selector = useSelector((store)=> store.allProducts.data)
    console.log(productDetails)

    const productClickHandler = (item:APIdataIF)=>{
        // naviget("/productInfo" )
        dispatch(setCardDetails(item))
        let sameCat = product.filter((value:APIdataIF)=>value.category == item.category)
        dispatch(setSimilarProducts(sameCat))
      }


    return (
        <div>

            <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:place-items-center lg:py-20">
                <img
                    src={productDetails.image}
                    alt=""
                    className="w-1/2  lg:rounded-2xl cursor-pointer"
                />

                <div className="px-8 pb-10">
                    <h2 className="bg-slate-100 py-1 px-2 text-orange-400 uppercase tracking-wide text-sm font-bold inline-block rounded shadow mb-10">
                        {productDetails.category}
                    </h2>
                    <h1 className="text-slate-900 mb-10 font-bold text-3xl lg:text-4xl">
                        {productDetails.title}
                    </h1>
                    <p className="text-slate-600 mb-10 leading-relaxed">
                        {productDetails.description}
                    </p>

                    <div className="flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:gap-2">
                        <ul className="flex items-center gap-5">
                            <li className="text-slate-900 font-bold text-2xl">$125.00</li>
                            <li className="bg-orange-100 py-1 px-2 text-orange-400 tracking-wide text-sm font-bold inline-block rounded shadow">
                                50%
                            </li>
                        </ul>

                        <p className="text-slate-600 text-sm">
                            <s>{productDetails.price}</s>
                        </p>
                    </div>

                    <div className="mt-10 lg:flex items-center justify-between gap-2">
                        <div className="lg:flex-1">
                            <button className="flex items-center justify-center gap-4 bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full lg:mt-0 hover:bg-orange-600 transition-all duration-200">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex  gap- md:gap-20 place-items-center mx-40">
          {sameCategory.map((data:APIdataIF)=> (
            <div
            key={data.id}
            onClick={()=>productClickHandler(data)}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] "
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.image}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md z-50 object-contain w-1/2 aspect-video h-48"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                {/* <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div> */}
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
    )
}

export default ProductInfo