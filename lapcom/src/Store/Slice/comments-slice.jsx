import { createSlice } from "@reduxjs/toolkit";

import { getCommentsByProduct, addCommentByProduct } from '../Actions/comments-action';

const initialCommentsState = {
    commentsItems: [],
    status: '',
    error: ''
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState: initialCommentsState,
    reducers: {},
    extraReducers: {
        [addCommentByProduct.fulfilled]: (state, action)=>{
            state.commentsItems = action.payload;
            state.status = 'success';
        },

        [getCommentsByProduct.fulfilled]: (state, action)=>{
            state.commentsItems = action.payload;
            state.status = 'success';
        }
    }
})

export default commentsSlice.reducer;