import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import Dropdown from "./Dropdown";
import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { setCopyData } from "../../Redux/apiDataSlice";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const naviget = useNavigate()
  const [search, setSearch] = useState<string>("")
  const [autocomplete, setAutocomplet] = useState<{values:Array<APIdataIF>,state:boolean}>({
    values: [],
    state: false
  })
  const products = useSelector((store: RootState) => store.allProducts.data)
  const copyData = useSelector((store: RootState) => store.allProducts.copyData)
  const categorySearch = useSelector((store: RootState) => store.allProducts.searchingInSelect)
  const dispatch = useDispatch()

  const inputHandler = (e: any) => {
    let value: string = e.target.value
    setSearch(value)

    let searchSuggestion: Array<APIdataIF> = categorySearch.filter((item: APIdataIF) => {
      return item.title.toLowerCase().includes(value);

    });


    console.log(value, "or", searchSuggestion)

    if (value === "") {
      // copyData(setCopyData(product))
      setAutocomplet({ ...autocomplete, values: [], state: false })


    } else {
      // dispatch(setCopyData(searchSuggestion))
      setAutocomplet({ ...autocomplete, values: searchSuggestion, state: true })

    }
  };


  const submitHandler = (Event: React.FormEvent<HTMLFormElement>) => {
    Event.preventDefault()
    setSearch((Event.target as HTMLInputElement).value)
    setAutocomplet({...autocomplete , state:false})
    dispatch(setCopyData(autocomplete.values))
    naviget("/")

    // if (search.length === 0) {
      // dispatch(setCopyData(product))
    // }
    // product.filter((value: APIdataIF) => {
    //   return
    // })
  }

  const autocompletHandler = (items:APIdataIF)=>{
    setSearch(items.title)
    console.log(items)
    let searchedItem = products.filter((value:APIdataIF)=>value.id === items.id)
    
    setAutocomplet({ ...autocomplete, values: searchedItem , state: false })

    // dispatch(setCopyData(items))
  }

  const home = ()=>{
    setSearch("")
    setAutocomplet({...autocomplete , state: false })
    dispatch(setCopyData(products))
  }

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200  z-40 fixed w-screen" >
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div onClick={()=> home()}>
            
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              {/* <img src={Logo} alt="Logo" className="w-10" /> */}
              Shopsy
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            {/* Dropdown */}
            <div >
              <Dropdown />
            </div>
            <div>
              <form
                onSubmit={(e) => submitHandler(e)}
                className="relative group hidden sm:block">
                <input
                  onChange={(e) => inputHandler(e)}
                  required
                  value={search}
                  type="text"
                  placeholder="search"
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
                />
                <button type="submit">
                  <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
                </button>
              </form>
              <div
                className={autocomplete.state ?
                  "w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 text-center border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800 h-fu absolute h-72 overflow-y-scroll bg-slate-50 " : ""}>
                {
                  copyData.map((value: any) => (
                    <div key={value.id} className={autocomplete.state ? "" : "hidden"} onClick={()=>autocompletHandler(value)}>{value.title}
                      <hr />
                    </div>

                  ))
                }

              </div>
            </div>

            {/* order button */}
            <button
              // onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}

    </div>
  );
};

export default Navbar;
