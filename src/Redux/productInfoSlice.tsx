import { createSlice } from "@reduxjs/toolkit";

interface initial {
    productDetails:APIdata | null,
    similarProducts : Array<APIdata> | null,
}

const initialState:initial ={
    productDetails : null,
    similarProducts : null,
}


const productInfo = createSlice({
    name : "PRODUCTINFO",
    initialState,
    reducers:{
        setCardDetails:(state , action)=>{
            state.productDetails = action.payload
        },

        setSimilarProducts :(state , action)=>{
            state.similarProducts = action.payload
        }

    }
})

export const{setCardDetails , setSimilarProducts } = productInfo.actions
export default productInfo.reducer