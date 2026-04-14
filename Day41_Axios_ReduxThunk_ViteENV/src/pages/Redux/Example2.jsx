import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    actions as productActions,
    selectors as productSelectors,
    useProductsList,
} from "@/store/product";
import {
    actions as provinceActions,
    selectors as provinceSelectors,
} from "@/store/province";

import http from "@/utils/http";
import { hideLoading, showLoading } from "@/store/ui/actions";

const styles = {
    wrapper: { margin: 20 },
    heading: {
        fontSize: 24,
        fontWeight: 600,
        marginBottom: 20,
    },
    heading2: {
        fontSize: 18,
        fontWeight: 600,
        marginBottom: 20,
    },
};

const Example2 = () => {
    const dispatch = useDispatch();
    const products = useProductsList();
    const isLoading = useSelector(productSelectors.getLoading);
    const provinces = useSelector(provinceSelectors.getList);
    console.log(provinces);

    console.log(isLoading);

    // useEffect(() => {
    //     (async () => {
    //         const response = await http.get("/products");
    //         dispatch(productActions.setList(response.data.items));
    //     })();
    // }, [dispatch]);

    useEffect(() => {
        dispatch(productActions.getList());
    }, [dispatch]);

    useEffect(() => {
        (async () => {
            dispatch(showLoading());
            try {
                const response = await http.get("/address/provinces");
                dispatch(provinceActions.setList(response.data));
            } catch (error) {
            } finally {
                dispatch(hideLoading());
            }
        })();
    }, [dispatch]);
    return (
        <div style={styles.wrapper}>
            <h1 style={styles.heading}>Redux Demo 2</h1>
            <h2 style={styles.heading}>Products list</h2>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>{product.title}</li>
                    ))}
                </ul>
            )}

            <h2 style={styles.heading}>Provinces list</h2>
            <ul>
                {provinces.map((province) => (
                    <li key={province.province_id}>{province.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Example2;
