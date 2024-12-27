import { configureStore } from "@reduxjs/toolkit";
import isNavOpen from "../features/isNavOpen";
import isLoad from "../features/isLoad";

export default configureStore({
    reducer: {
        isNavOpen:isNavOpen,
        isLoad:isLoad
    },
})