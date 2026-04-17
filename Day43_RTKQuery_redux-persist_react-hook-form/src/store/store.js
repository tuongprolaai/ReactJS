import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { setupListeners } from "@reduxjs/toolkit/query";
import persistStore from "redux-persist/es/persistStore";

import { counterSlice } from "@/features/counter";
import { productSlice } from "@/features/product";
import { addressApi } from "@/features/address/addressSlice";
import { authSlice } from "@/features/auth";

const rootReducer = combineReducers({
  [authSlice.reducerPath]: authSlice.reducer,
  [counterSlice.reducerPath]: counterSlice.reducer,
  [productSlice.reducerPath]: productSlice.reducer,
  [addressApi.reducerPath]: addressApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddlewares) => [
    ...getDefaultMiddlewares({
      serializableCheck: false,
    }),
    addressApi.middleware,
  ],
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

window.store = store;

export { store, persistor };
