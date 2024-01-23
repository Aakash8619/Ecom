import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiData = createSlice({
    name: "ApiData",
    initialState: {
        data: [],
        copyData : [],
        satatus: "IDLE",
        categorys: [],
        searchingInSelect : [],
    },

    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        },

        setStatus: (state, action) => {
            state.satatus = action.payload
        },

        setCategory :(state , action)=>{
            state.categorys = action.payload
        },

        setCopyData :(state , action) =>{
            state.copyData = action.payload
        },

        setSearchingInSelect :(state , action) =>{
            state.searchingInSelect =action.payload
        }

    }
})


export const { setData, setStatus, setCategory ,setCopyData , setSearchingInSelect } = apiData.actions;
export default apiData.reducer;

// Thunks
export const fetchProducts = () => {
    return async(dispatch:any ) => {
        dispatch(setStatus("LOADING"))
        try{
            const res = await axios.get("https://fakestoreapi.com/products")
            dispatch(setData(res.data))
            dispatch(setCopyData(res.data))
            dispatch(setSearchingInSelect(res.data))
            dispatch(setStatus("IDLE"))
            // filter category 
            let copyarr: string[] = ["All"];
            res.data.map((value: APIdataIF) => {
              copyarr.push(value.category);
            });
            let filteredCategory = copyarr.filter((item, index) => copyarr.indexOf(item) === index);
            dispatch(setCategory(filteredCategory))
          
        }
        catch(err){
            dispatch(setStatus("ERROR"))
        }
    }
}
