import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "./slices/auth";
import { noteSlice } from "./slices/note/noteSlice";
// import { authReducer } from "../reducers/authReducer";
// import { noteReducer } from "../reducers/noteReducer";
// import { uiReducer } from "../reducers/uiReducer";


// const reducers = {
//     auth: authReducer,
//     ui  : uiReducer,
//     note: noteReducer
// }

export const store = configureStore({
    reducer : {
        auth: authSlice.reducer,
        note: noteSlice.reducer
    }
});  