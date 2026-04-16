import { useFetchProductsList, useProductsList } from "@/features/product";
import { selectLoading } from "@/features/product";
import { useSelector } from "react-redux";
import { Link } from "react-router";

function ProductsList() {
    useFetchProductsList();

    const products = useProductsList();

    const loading = useSelector(selectLoading);
    return (
        <div>
            <h1>Products list</h1>
            <Link to="/address/provinces">List provinces</Link>
            {loading ? (
                <div>Loading....</div>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>{product.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ProductsList;
