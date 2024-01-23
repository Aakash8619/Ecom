import { useDispatch, useSelector } from "react-redux"
import { setCopyData, setData, setSearchingInSelect } from "../../Redux/apiDataSlice"
import { RootState } from "../../Redux/store";

const Dropdown = () => {
    const dispatch = useDispatch()
    const category = useSelector((state: RootState) => state.allProducts.categorys)
    const data = useSelector((state: RootState) => state.allProducts.data)

    const dropdownHandler = (value: string) => {
     
        let copyArr: Array<APIdataIF> = data.filter((item:APIdataIF)=>item.category === value );
        dispatch(setCopyData(copyArr))
        dispatch(setSearchingInSelect(copyArr))

        if(value === "All"){
            dispatch(setCopyData(data))
            dispatch(setSearchingInSelect(data))
        }
    }

    return (
        <div>
            <select name="" id=""
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800 text-center"
                onChange={(e) => dropdownHandler(e.target.value)}>
                {
                    category.map((data: string, i: number) => (
                        <option value={data} key={i} >{data}</option>
                    ))
                }


                {/* <option value="">xyz</option>
                <option value="">xyz</option>
                <option value="">xyz</option>
                <option value="">xyz</option> */}
            </select>
        </div>
    )
}

export default Dropdown