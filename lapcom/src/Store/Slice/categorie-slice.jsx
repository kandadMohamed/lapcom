import { createSlice } from "@reduxjs/toolkit";

import { 
    getAllCategorie, 
    addCategorie, 
    deleteCategorie, 
    upDateCategorie 
} from '../Actions/categorie-actions';

const initialCategorieSlice = {
    categories: [],
    status: '',
    error: ''
}

const categorieSlice = createSlice({
    name: 'categorie',
    initialState: initialCategorieSlice,
    reducers:{},
    extraReducers: {
        [getAllCategorie.pending]: (state)=>{
            state.status = 'pending';
        },
        [getAllCategorie.fulfilled]: (state, action)=>{
            state.categories = action.payload;
            state.status = 'success';
        },
        [getAllCategorie.error]: (state, action)=>{
            state.error = action.payload;
            state.status = 'pending';
        },

        [addCategorie.pending]: (state)=>{
            state.status = 'pending';
        },
        [addCategorie.fulfilled]: (state, action)=>{
            state.categories.push(action.payload);
            state.status = 'success';
        },
        [addCategorie.error]: (state, action)=>{
            state.error = action.payload;
            state.status = 'pending';
        }
    }
})

export default categorieSlice.reducer;