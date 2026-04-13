import { createStore } from "@/libs/redux";
import rootReducer from "./reducer";

const store = createStore(rootReducer);

export default store;
