import { createSlice } from "@reduxjs/toolkit";

import  { 
    getProductsByCategorie,
    getAllProducts,
    getSingelProduct,
    deleteProduct 
} from '../Actions/product-actions';

const initialProductSlice = {
    items: [],
    productCount: 0,
    status: '',
    error: ''
}

const productSlice = createSlice({
    name: 'products',
    initialState: initialProductSlice,
    reducers:{
        toInitialState: state =>{
            state = {
                items: [],
                productCount: 0,
                status: '',
                error: ''
            }
        }
    },
    extraReducers: {
        [getProductsByCategorie.pending]: (state)=>{
            state.status = 'pending';
        },
        [getProductsByCategorie.fulfilled]: (state,action)=>{
            state.items = action.payload;
            state.status = 'success';
        },
        [getProductsByCategorie.error]: (state,action)=>{
            state.error = action.payload;
            state.status = 'error';
        },
        
        [getAllProducts.fulfilled]: (state,action)=>{
            state.items = action.payload.product.data;
            state.productCount = action.payload.productCount;
            state.status = 'success';
        },

        [getSingelProduct.fulfilled]: (state,action)=>{
            state.items = action.payload[0];
            state.status = 'success';
        },

        // [deleteProduct.fulfilled]: (state,action)=>{
        //     state.items = action.payload[0];
        //     state.status = 'success';
        // }
    }
}) 

export default productSlice.reducer;
export const productAction = productSlice.actions;