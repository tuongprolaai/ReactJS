import { configureStore } from "@reduxjs/toolkit";
import counterReducer, {reducerPath} from "@/features/counter/counterSlice"

export const store = configureStore({
  reducer: {
    [reducerPath]: counterReducer,
  },
});