import { useDispatch, useSelector } from "react-redux";
const styles = {
    wrapper: { margin: 20 },
    heading: {
        fontSize: 20,
        fontWeigth: 600,
        marginBottom: 20,
    },
    theme: {
        marginTop: 30,
    },
    btns: {
        marginTop: 10,
    },
};

function Counter() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div style={styles.wrapper}>
            <h2 style={styles.heading}>{counter}</h2>
            <button
                onClick={() => {
                    dispatch({
                        type: "increase",
                    });
                }}
            >
                Increase
            </button>
        </div>
    );
}

function Theme() {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme);
    return (
        <div>
            <h2 style={styles.heading}>Theme: {theme}</h2>
            <div className={styles.btns}>
                <button
                    onClick={() => {
                        dispatch({
                            type: "setTheme",
                            payload: "light",
                        });
                    }}
                >
                    Light
                </button>
                <button
                    onClick={() => {
                        dispatch({
                            type: "setTheme",
                            payload: "dark",
                        });
                    }}
                >
                    Dark
                </button>
            </div>
        </div>
    );
}

const Redux = () => {
    return (
        <div style={styles.wrapper}>
            <h1 style={styles.heading}>Redux Demo</h1>
            <Counter />
            <Theme />
        </div>
    );
};

export default Redux;
