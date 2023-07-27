import { createSlice } from "@reduxjs/toolkit";
import { 
    createAccount, 
    getAllAccount, 
    getSingelAccount, 
    deleteAccount, 
    upDateAccount,
    resetAccountPassword
} from '../Actions/account-actions';

const initialAccountState = {
    accountItem: [],
    status: '',
    message: ''
}

const accountSlice = createSlice({
    name: 'account',
    initialState: initialAccountState,
    extraReducers: {
        [createAccount.pending]: (state)=>{
            state.status = 'pending';
        },
        [createAccount.fulfilled]: (state,action)=>{
            state.accountItem = action.payload;
            state.status = 'success';
            state.message = 'Create Account Good';
        },
        [createAccount.error]: (state,action)=>{
            state.message = action.payload;
            state.status = 'error';
        },
        
        [getAllAccount.pending]: (state)=>{
            state.status = 'pending';
        },
        [getAllAccount.fulfilled]: (state,action)=>{
            state.accountItem = action.payload;
            state.status = 'success';
        },
        [getAllAccount.error]: (state,action)=>{
            state.message = action.payload;
            state.status = 'error';
        },
        
        [getSingelAccount.pending]: (state)=>{
            state.status = 'pending';
        },
        [getSingelAccount.fulfilled]: (state,action)=>{
            state.accountItem = action.payload;
            state.status = 'success';
        },
        [getSingelAccount.error]: (state,action)=>{
            state.message = action.payload;
            state.status = 'error';
        },
        
        [deleteAccount.pending]: (state)=>{
            state.status = 'pending';
        },
        [deleteAccount.fulfilled]: (state,action)=>{
            state.accountItem = action.payload;
            state.status = 'success';
        },
        [deleteAccount.error]: (state,action)=>{
            state.message = action.payload;
            state.status = 'error';
        },
        
        [upDateAccount.pending]: (state)=>{
            state.status = 'pending';
        },
        [upDateAccount.fulfilled]: (state,action)=>{
            state.accountItem = action.payload;
            state.status = 'success';
        },
        [upDateAccount.error]: (state,action)=>{
            state.message = action.payload;
            state.status = 'error';
        },
        
        [resetAccountPassword.pending]: (state)=>{
            state.status = 'pending';
        },
        [resetAccountPassword.fulfilled]: (state,action)=>{
            state.accountItem = action.payload;
            state.status = 'success';
        },
        [resetAccountPassword.error]: (state,action)=>{
            state.message = action.payload;
            state.status = 'error';
        },
    }
})

export default accountSlice.reducer;