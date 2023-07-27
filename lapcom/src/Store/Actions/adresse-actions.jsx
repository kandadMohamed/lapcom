import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/';

export const getAdresseByUser = createAsyncThunk(
    'adresse/getAdresseByUser',
    async (dataUser,thunkApi) =>{
        const { getState } = thunkApi;
        const infoState = getState(state=>state.auth);
        const idClient =  infoState.auth.infoUser.IdClient;
        const res = await axios.post(
            `${API_URL}api/get-adresse-user`, 
            {
                clientId: idClient
            }
        );
        const resData = await res.data;
        return resData;
    }
)