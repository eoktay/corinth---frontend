import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from './reducer';
import apiCall from "./middlware/apiCall";
export default () =>  configureStore({
        reducer,
        middleware: [
            ...getDefaultMiddleware(),
            apiCall
        ]
    });