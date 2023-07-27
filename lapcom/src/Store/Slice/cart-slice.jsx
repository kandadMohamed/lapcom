import { createSlice } from "@reduxjs/toolkit";

import { 
    getCartItem, 
    addCartItem, 
    deleteCartItem, 
    upDateCartQuantity 
} from '../Actions/cart-actions';

const initialCartState = {
    items: [],
    status: '',
    error: '',
    message: ''
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducer: {},
    extraReducers: {
        [getCartItem.pending]: (state) =>{
            state.status = 'pending';
        },
        [getCartItem.fulfilled]: (state,action) =>{
            state.status = 'success';
            state.items  = action.payload;
        },
        [getCartItem.error]: (state,action) =>{
            state.status = 'error';
            state.error  = action.payload;
        },

        [addCartItem.pending]: (state) =>{
            state.status = 'pending';
        },
        [addCartItem.fulfilled]: (state,action) =>{
            state.items = action.payload;
            state.status = 'success';
        },
        [addCartItem.error]: (state,action) =>{
            state.error  = action.payload;
            state.status = 'error';
        },

        [deleteCartItem.pending]: (state,action) =>{
            console.log('lll');
            state.status = 'pending';
        },
        [deleteCartItem.fulfilled]: (state,action) =>{
            // const { productId } = action.payload;
            // state.items = state.items.filter(item=>item.id !== productId);
            state.items = action.payload;
            state.status = 'success';
        },
        [deleteCartItem.error]: (state,action) =>{
            state.status = 'error';
        },

        [upDateCartQuantity.pending]: (state,action) =>{
            state.status = 'pending';
        },
        [upDateCartQuantity.fulfilled]: (state,action) =>{
            state.items = action.payload;
            state.status = 'success';
            // const { status, message } = action.payload;
            // state.message = message;
            // if(status !== 'error'){
            // }
        },
        [upDateCartQuantity.error]: (state,action) =>{
            state.status = 'error';
        }
    }
})

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;