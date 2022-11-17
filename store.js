import { configureStore } from '@reduxjs/toolkit'
// slices
import nav from "slices/navSlice";

export const store = configureStore({
    reducer: { nav },
})