import { createSlice } from "@reduxjs/toolkit";
import { getAdresseByUser } from '../Actions/adresse-actions';

const initialAdresseState = {
    adresseItems: [],
    status: '',
    message: ''
}

const adressesSlice = createSlice({
    name: 'adresse',
    initialState: initialAdresseState,
    extraReducers: {
        [getAdresseByUser.fulfilled]: (state, action)=>{
            state.adresseItems = action.payload;
            state.status = 'success';
        }
    }
})

export default adressesSlice.reducer;
export const authActions = adressesSlice.actions;