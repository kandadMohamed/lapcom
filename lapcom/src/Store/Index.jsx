import { configureStore } from "@reduxjs/toolkit";

import cartReducer from './Slice/cart-slice';
import categorieReducer from "./Slice/categorie-slice";
import productsReducer from './Slice/products-slice';
import authReducer from './Slice/auth-slice';
import filterReducer from './Slice/Filter-slice';
import commentsReducer from "./Slice/comments-slice";
import villeReducer from './Slice/ville-slice';
import adressesReducer from './Slice/adresse-slice';
import orderReducer from './Slice/order-slice';

const store = configureStore({reducer:{
    cartItems: cartReducer,
    categorie: categorieReducer,
    product: productsReducer,
    auth: authReducer,
    filter: filterReducer,
    comments: commentsReducer,
    ville: villeReducer,
    adresses: adressesReducer,
    order: orderReducer
}})

export default store;