import { combineReducers, legacy_createStore as createStore } from "redux";

// Reducers
import productReducer from "./product/reducer"
import provinceReducer from "./product/reducer"

const rootReducer = combineReducers({
  product: productReducer,
  province: provinceReducer
})

const store = createStore(rootReducer);

window.store = store;

export default store;
