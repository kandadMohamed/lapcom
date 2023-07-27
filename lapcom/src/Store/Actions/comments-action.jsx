import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/';

export const getCommentsByProduct = createAsyncThunk(
    'comments/getCommentsByProduct',
    async (dataProduct,thunkApi)=>{
        try{
            const res = await axios.post(
                `${API_URL}api/get-comment-product`,
                {
                    productId: dataProduct
                }
                
            )
            const commentsData = res.data;
            return commentsData;
        }catch(e){

        }
    }
)

export const addCommentByProduct = createAsyncThunk(
    'comments/addCommentByProduct',
    async (dataComment,thunkApi)=>{
        try{
            console.log(dataComment);
            const res = await axios.post(
                `${API_URL}api/add-comment-product`,
                dataComment
            )
            const commentsData = res.data;
            return commentsData;
        }catch(e){
            return e.message;
        }
    }
) 