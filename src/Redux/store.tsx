import { configureStore } from "@reduxjs/toolkit";
import apiData from "./apiDataSlice";
import roductInfo from "../productInfo/ProductInfo";
import productInfoSlice from "./productInfoSlice";

const store = configureStore({
    reducer :{
        allProducts : apiData,
        productInfo : productInfoSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store
