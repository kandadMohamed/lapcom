import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const Api = 'http://127.0.0.1:8000/';

export const getAllVille = createAsyncThunk(
    'ville/getAllVille',
    async (data,thunkApi) =>{
        const res = await axios.get(
            `${Api}api/get-all-villes`, 
        );
        const resData = await res.data;
        return resData;
    }
)

