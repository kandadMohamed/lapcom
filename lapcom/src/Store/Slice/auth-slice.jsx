import { createSlice } from "@reduxjs/toolkit";
import { 
    userLogIn, 
    userCreateAccount,
    resetAccountPassword
} from '../Actions/auth-actions';

const initialAuthState = {
    infoUser: {},
    isAuth: false,
    status: '',
    error: '',
    message: ''
}

const authSlice = createSlice({
    name: 'Auth',
    initialState: initialAuthState,
    reducers:{
        logIn: (state,action)=>{
            console.log('Log In')
            state.infoUser = action.payload;
            state.isAuth = true;
        },
        logOut: (state)=>{
            console.log('firstssss');
            state.infoUser = {};
            localStorage.removeItem('accountLapCom');
            state.isAuth = false;
            state.status = '';
        }
    },
    extraReducers: {
        [userLogIn.pending]: (state)=>{
            state.status = 'pending';
        },
        [userLogIn.fulfilled]: (state, action)=>{
            const { status, message, infoUser, isAdmin } = action.payload;
            if(status === 'error'){ 
                state.message = message;
                state.status = 'error';
            }else{
                state.infoUser = infoUser;
                localStorage.setItem(
                    'accountLapCom',
                    JSON.stringify({
                            ...state.infoUser, isAdmin: isAdmin
                    })
                );
                state.isAuth = true;
                state.message = '';
                state.status = 'success';
            }
        },
        [userLogIn.error]: (state,action)=>{
            state.status = 'error';
            state.message = action.payload;
        },

        [userCreateAccount.pending]: (state, action)=>{
            state.status = 'pending';
        },
        [userCreateAccount.fulfilled]: (state, action)=>{
            const { status, message } = action.payload;
            if(status === 'error'){ 
                state.message = message;
                state.status = 'error';
            }else{
                state.isAuth = false;
                state.error = '';
                state.message = message;
                state.status = 'success';
            }
        },

        [resetAccountPassword.pending]: (state, action)=>{
            state.status = 'pending';
        },
        [resetAccountPassword.fulfilled]: (state, action)=>{
            const { status, message } = action.payload;
            if(status === 'error'){ 
                state.message = message;
                state.status = 'error';
            }else{
                state.isAuth = false;
                state.error = '';
                state.message = message;
                state.status = 'success';
            }
        },
        [resetAccountPassword.error]: (state, action)=>{
            state.isAuth = false;
            state.error = '';
            state.message = action.payload;
            state.status = 'error';
        }
    }
})

export default authSlice.reducer;
export const authActions = authSlice.actions;