import { configureStore } from '@reduxjs/toolkit'
// slices
import navSlice from './slices/navSlice'

export const store = configureStore({
    reducer: { 
        nav: navSlice
     },
})