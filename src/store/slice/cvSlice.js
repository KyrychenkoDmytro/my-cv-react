import { createSlice } from "@reduxjs/toolkit";
import data from '../../data.json';

export const cvSlice = createSlice({
    name: 'cv',
    initialState: {
        data: data,
    }
})

export default cvSlice.reducer;