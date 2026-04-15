import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "@/features/counter";
import { productSlice } from "@/features/product";

export const store = configureStore({
    reducer: {
        [counterSlice.reducerPath]: counterSlice.reducer,
        [productSlice.reducerPath]: productSlice.reducer,
    },
});

window.store = store;
