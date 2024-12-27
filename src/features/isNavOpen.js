import { createSlice } from "@reduxjs/toolkit";

export const  isNav = createSlice({
    name: 'isNav',
    initialState: {
        navbarOpen: false,
    },
    reducers:{
        handleIsNav : (state) => {
            state.navbarOpen = !state.navbarOpen;
        },
        setFalseNav : (state) => {
            state.navbarOpen = false
        }
    }
})

export const { handleIsNav, setFalseNav } = isNav.actions;
export default isNav.reducer