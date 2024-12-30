import {configureStore} from "@reduxjs/toolkit"
import UserReducer from "./slices/User.slices.js"

const Store = configureStore({
    reducer:{
        user:UserReducer
    }
});

export default Store;