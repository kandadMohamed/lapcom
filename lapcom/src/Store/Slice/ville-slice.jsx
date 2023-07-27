import { createSlice } from "@reduxjs/toolkit";

import { getAllVille } from '../Actions/ville-actions';

const initialVilleState = {
    villeItems: [],
    status: '',
    message: ''
}

const villeSlice = createSlice({
    name: 'ville',
    initialState: initialVilleState,
    extraReducers:{
        [getAllVille.fulfilled]: (state, action)=>{
            state.villeItems = action.payload;
            state.status = 'success';
        }
    }
})

export default villeSlice.reducer;