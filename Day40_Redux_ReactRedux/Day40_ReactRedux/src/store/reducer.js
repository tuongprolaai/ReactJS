const initState = {
    counter: 0,
    theme: "light",
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "increase":
            return {
                ...state,
                counter: state.counter + 1,
            };
        case "setTheme":
            return {
                ...state,
                theme: (state.theme = action.payload),
            };
        default:
            return state;
    }
};

export default reducer;
