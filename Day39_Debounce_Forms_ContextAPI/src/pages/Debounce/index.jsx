import useDebounce from "@/hooks/useDebounce";
import { useRef } from "react";
import { useEffect, useState } from "react";

const styles = {
    wrapper: { margin: 20 },
    heading: {
        fontSize: 20,
        fontWeigth: 600,
        marginBottom: 20,
    },
};

const Debounce = () => {
    const [products, setProducts] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    // const timerId = useRef(null);
    const debounceSearchValue = useDebounce(searchValue, 500);
    // const [pagination, setPagination] = useState(1);
    useEffect(() => {
        fetch("https://api01.f8team.dev/api/products")
            .then((res) => res.json())
            .then((result) => setProducts(result.data.items));
    }, []);
    // useEffect(() => {
    //     if (!searchValue) return;
    //     clearTimeout(timerId.current);
    //     timerId.current = setTimeout(() => {
    //         fetch(`https://api01.f8team.dev/api/products?q=${searchValue}`)
    //             .then((res) => res.json())
    //             .then((result) => setProducts(result.data.items));
    //     }, 500);
    // }, [searchValue]);
    useEffect(() => {
        if (!debounceSearchValue) return;
        fetch(`https://api01.f8team.dev/api/products?q=${debounceSearchValue}`)
            .then((res) => res.json())
            .then((result) => setProducts(result.data.items));
    }, [debounceSearchValue]);
    return (
        <div style={styles.wrapper}>
            <h1 style={styles.heading}>Debounce</h1>
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearchValue(e.target.value)}
                    value={searchValue}
                />
            </div>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.id} {product.title}
                    </li>
                ))}
            </ul>

            {/* Pagination */}
            {/* <ul>
                {}
            </ul> */}
        </div>
    );
};

export default Debounce;
