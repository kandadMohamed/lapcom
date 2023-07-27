import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/';

export const addOrdersByUser = createAsyncThunk(
    'orders/addOrdersByUser',
    async (dataOrder, thunkApi) =>{
        const { getState } = thunkApi;
        const infoState = getState(state=>state.auth);
        const idClient =  infoState.auth.infoUser.IdClient;
        const res = await axios.post(
            `${API_URL}api/add-orders-user`, 
            {
                clientId: idClient,
                cartItems: [...dataOrder.orderData],
                adresseId: dataOrder.adresseData,
                paymentMethode: dataOrder.paymentMethod
            }
        );
        const resData = await res.data;
        return resData;
    }
)