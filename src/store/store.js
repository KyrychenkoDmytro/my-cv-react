import { configureStore } from "@reduxjs/toolkit";
import cvReducer from "./slice/cvSlice";

export default configureStore({
    reducer: {
        cv: cvReducer
    }
});