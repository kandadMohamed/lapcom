import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const Api = 'http://127.0.0.1:8000/';

export const createAccount = createAsyncThunk(
    'Auth/userCreateAccount',
    async (data,thunkApi) =>{
        const res = await axios.post(
            `${Api}api/user-create-account`, 
            data,
        );
        const resData = await res.data;
        return resData;
    }
)

export const getSingelAccount = createAsyncThunk(
    'account/getSingelAccount',
    async (dataAccount,thunkApi)=>{
        console.log(dataAccount);
    }
)

export const getAllAccount = createAsyncThunk(
    'account/getAllAccount',
    async (dataAccount,thunkApi)=>{
        console.log(dataAccount);
    }
)

export const deleteAccount = createAsyncThunk(
    'account/deleteAccount',
    async (dataAccount,thunkApi)=>{
        console.log(dataAccount);
    }
)

export const upDateAccount = createAsyncThunk(
    'account/upDateAccount',
    async (dataAccount,thunkApi)=>{
        console.log(dataAccount);
    }
)

export const resetAccountPassword = createAsyncThunk(
    'account/resetAccountPassword',
    async (dataAccount,thunkApi)=>{
        const res = await axios.post(
            `${Api}api/lost-password`, 
            dataAccount,
        );
        const resData = await res.data;
        console.log(resData);
        return resData;
    }
)
