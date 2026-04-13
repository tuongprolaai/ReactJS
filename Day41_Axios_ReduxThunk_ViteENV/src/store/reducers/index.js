import { combineReducers } from "redux";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
    product: productReducer,
    // posts: postReducer,
    // commments: commentsReducer,
});

export default rootReducer;
