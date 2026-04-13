const initState = {
    list: [],
};
const productReducer = (state = initState, action) => {
    switch (action.type) {
        case "product/set-list":
            return {
                ...state,
                list: action.payload,
            };
        default:
            return state;
    }
};

export default productReducer;
