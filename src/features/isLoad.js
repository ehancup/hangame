import { createSlice } from "@reduxjs/toolkit";


export const isLoad = createSlice({
    name:'isLoad',
    initialState : {
        load : true
    },
    reducers: {
        loadDone : (state) => {
            state.load = false;
        }
    }
})

export const { loadDone } = isLoad.actions;
export default isLoad.reducer