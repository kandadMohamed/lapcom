import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Api = 'https://lapcom-55ec4-default-rtdb.firebaseio.com/';
const API_URL = 'http://127.0.0.1:8000/';

export const getCartItem = createAsyncThunk(
    'cart/getCartItems',
    async (data,thunkApi) =>{
        const { getState } = thunkApi;

        try{
            const authData = getState().auth;
            const clientId = authData.infoUser['IdClient'];
            const res  = await axios.post(
                `${API_URL}api/cart-shop-client`,
                {
                    user: clientId
                }
            );
            const cartData = await res.data; 
            console.log("🚀 ~ file: cart-actions.jsx ~ line 18 ~ cartData", cartData)
            return cartData;
        }catch(e){
            return e.message;
        }
    }
)

export const addCartItem = createAsyncThunk(
    'cart/addCartItems',
    async (data,thunkApi) =>{
        const { getState } = thunkApi;
        try{
            
            const authData = getState().auth;
            const clientId = authData.infoUser['IdClient'];

            const resData = await axios.post(
                `${API_URL}api/cart-shop-add-product`,
                {
                    productId: {IdProduit: data},
                    clientId
                }
            );

            const cartData = await resData.data;
            return cartData;
        }catch(e){
            return e.message;
        }
    }
)

export const deleteCartItem = createAsyncThunk(
    'cart/deleteCartItem',
    async (dataId,thunkApi) =>{
        const { getState } = thunkApi;
        try{
            const authData = getState().auth;
            const clientId = authData.infoUser['IdClient'];

            const resData = await axios.post(
                `${API_URL}api/cart-shop-delete-product`,
                {
                    productId: dataId,
                    clientId
                }
            );
            const cartData = await resData.data; 
            return cartData;
        }catch(e){
            return e.message;
        }
    }
)

export const upDateCartQuantity= createAsyncThunk(
    'cart/deleteCartItem',
    async (dataProduct,thunkApi) =>{
        const { getState } = thunkApi;
        try{
            const authData = getState(state=>state.auth);
            const clientInfo = authData.auth.infoUser;
            const resData = await axios.post(
                `${API_URL}api/cart-shop-update-product`,
                {
                    ...dataProduct,
                    clientInfo
                }
            );
            const cartData = await resData.data; 
            return cartData;
        }catch(e){
            return e.message;
        }
    }
)