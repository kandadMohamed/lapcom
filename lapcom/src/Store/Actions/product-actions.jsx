import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { getProductsIdCategorie } from '../../Api/product-api';

const API = 'https://lapcom-55ec4-default-rtdb.firebaseio.com/Products';
const API_URL = 'http://127.0.0.1:8000/';

export const getProductsByCategorie = createAsyncThunk(
    'products/getProductsByCategorie',
    async (dataCatgorie,thunkApi) =>{

        try{
            console.log('sdsd');
            const product = await axios.get(`${API_URL}api/product-categorie`);
            const productData = await product.data;
            return productData;
            return getProductsIdCategorie(dataCatgorie);
        }catch(e){
            return e.message;
        }
    }
)

export const getAllProducts = createAsyncThunk(
    'products/getAllProducts',
    async (_dataParams,thunkApi) =>{
        try{
            const resData = await axios.get(
                `${API_URL}api/get-product`,
                {
                    params:_dataParams
                }
            )
            const Data = await resData.data;
            console.log(Data);
            return Data;
        }catch(e){
            return e.message;
        }
    }
)

export const getSingelProduct = createAsyncThunk(
    'products/getSingelProduct',
    async (dataProduct,thunkApi) =>{

        try{
            console.log(dataProduct);
            const resData = await axios.post(
                `${API_URL}api/get-single-product`,
                dataProduct
            )
            const productData = await resData.data; 
            console.log(productData)
            return productData;
        }catch(e){
            return e.message;
        }
    }
)

export const addProducts = createAsyncThunk(
    'products/getAllProducts',
    async (dataProduct,thunkApi) =>{

        try{
            const resData = await axios.post(
                `${API_URL}api/add-product`,
                dataProduct
            )
            return resData.data;
        }catch(e){
            return e.message;
        }
    }
)

export const upDateProduct = createAsyncThunk(
    'products/upDateProduct',
    async (dataProduct,thunkApi) =>{

        // ? We Need To Get 4 Product For rach Categorie;
        try{
            const resData = await axios.put(
                `${API}/${dataProduct.id}.json`,
                dataProduct
            )
            return resData.data;
        }catch(e){
            return e.message;
        }
    }
)

export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async (dataProduct,thunkApi) =>{
        const { getState, dispatch } = thunkApi;

        const dataFilter = getState(state=>state.filter);

        try{
            const res = await axios.post(
                `${API_URL}api/delete-product`,
                {
                    productId: dataProduct 
                }
            )
            const productData = await res.data
            dispatch(getAllProducts(dataFilter.filter));
        }catch(e){
            return e.message;
        }
    }
)

