import { createSlice } from "@reduxjs/toolkit";

import { addOrdersByUser } from "../Actions/order-actions";

const initialOrderState = {
    ordersItems: [],
    orderInfo: {},
    status: '',
    message: ''
}

const ordersSlice = createSlice({
    name: 'orders',
    initialState: initialOrderState,
    extraReducers:{
        [addOrdersByUser.fulfilled]: (state, action)=>{
            const { status, orderItems, orderInfo } = action.payload;

            if(status === 'fulfilled'){
                state.ordersItems = orderItems;
                state.orderInfo = orderInfo;
                state.status = status;
            }
        }
    }
})

export default ordersSlice.reducer;