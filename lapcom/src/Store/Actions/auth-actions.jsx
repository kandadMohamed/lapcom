import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const Api = 'http://127.0.0.1:8000/';

export const userCreateAccount = createAsyncThunk(
    'Auth/userCreateAccount',
    async (data,thunkApi) =>{
        const res = await axios.post(`${Api}/loggedin`, data);
        const resData = await res.data;
        console.log(resData);
        return {...data}
    }
)
export const userLogIn = createAsyncThunk(
    'Auth/userLogIn',
    async (data,thunkApi) =>{
        const res = await axios.post(`${Api}api/user-loggedIn`,data);
        const resData = await res.data;
        console.log(resData);
        return resData;
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