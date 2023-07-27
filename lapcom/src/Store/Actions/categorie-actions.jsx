import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = 'https://lapcom-55ec4-default-rtdb.firebaseio.com/Categorie';
const API_URL = 'http://127.0.0.1:8000/';

export const getAllCategorie = createAsyncThunk(
    'categorie/getAllCategorie',
    async (data,thunkApi)=>{

        try{
            const res = await axios.get(`${API_URL }api/categorie`);
            const resData = await res.data;
            return resData;
        }catch(e){
            return e.message;
        }
    }
)

export const addCategorie = createAsyncThunk(
    'categorie/addCategorie',
    async (dataCatgorie,_)=>{

        try{
            const resData = await axios.post(`${API}.json`,{...dataCatgorie});
            return resData.data;
        }catch(e){
            return e.message;
        }
    }
)

export const deleteCategorie = createAsyncThunk(
    'categorie/getAllCategorie',
    async (dataCatgorie,_)=>{

        try{
            const resData = await axios.delete(`${API}/${dataCatgorie.id}.json`);
            return resData.data;
        }catch(e){
            return e.message;
        }
    }
)

export const upDateCategorie = createAsyncThunk(
    'categorie/upDateCategorie',
    async (dataCatgorie,_)=>{

        try{
            const resData = await axios.put(`${API}/${dataCatgorie.id}.json`,{...dataCatgorie});
            return resData.data;
        }catch(e){
            return e.message;
        }
    }
)