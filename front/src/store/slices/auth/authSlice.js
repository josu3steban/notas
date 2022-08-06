import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    checking: "cheking", //not-authenticated, authenticating, authenticated
    status  : 'complete', // complete
    uid     : null,
    name    : null,
    email   : null,
    img     : null
}


export const authSlice = createSlice({

    name: 'auth',

    initialState,

    reducers: {

        authenticating: ( state, action ) => {

            state.status = 'authenticating';
            
        },

        login: ( state, action ) => {

            state.checking = 'authenticated';
            state.status = 'complete';
            
            state.uid   = action.payload.uid;
            state.name  = action.payload.name,
            state.email = action.payload.email;
            state.img   = action.payload.img ?? "";

        },

        logout: ( state ) => {

            state.checking = 'not-authenticated';
            state.status = 'complete';
            
            state.uid   = null;
            state.name  = null,
            state.email = null;
            state.img   = null;
            
        },

    }
});

export const { login, logout, authenticating } = authSlice.actions;