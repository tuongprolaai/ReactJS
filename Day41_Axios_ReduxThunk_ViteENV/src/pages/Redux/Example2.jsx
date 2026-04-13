import http from "@/utils/http";
import { useEffect } from "react";
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

const Example2 = () => {
    useEffect(() => {
        (async () => {
            const response = await http.get("/products");
            dispatchEvent({
                type: "product/set-list",
                payload: response.data,
            });
        })();
    }, []);
    return (
        <div style={styles.wrapper}>
            <h1 style={styles.heading}>Example2 Demo</h1>
        </div>
    );
};

export default Example2;
