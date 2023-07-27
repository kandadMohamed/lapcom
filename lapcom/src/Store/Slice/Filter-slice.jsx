import { createSlice } from "@reduxjs/toolkit";

const initialFilterState = {
    sortPrice: 'desc',
    categorie: 0,
    nameProduct: '',
    price: {
        min: 0,
        max: 1000000
    },
    page: 1,
    numberProductInPage: 12
}

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialFilterState,
    reducers:{
        filterBySortPrice: (state, action)=>{
            state.sortPrice = action.payload;
        },
        filterByCategorie: (state, action)=>{
            state.categorie = action.payload;
        },
        filterByNameProduct: (state, action)=>{
            state.nameProduct = action.payload;
        },
        filterByPrice: (state, action)=>{
            state.price = JSON.stringify({
                min: action.payload.min,
                max: action.payload.max
            })
            
        },
        numberPage: (state, action)=>{
            state.page = action.payload;
        },
        numberProductPage: (state, action)=>{
            state.numberProductInPage = action.payload;
        }
    }
});

export default filterSlice.reducer;
export const filterActions = filterSlice.actions;