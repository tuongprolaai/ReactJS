import { useFetchProductsList, useProductsList } from "@/features/product";
import { selectLoading } from "@/features/product";
import { useSelector } from "react-redux";

function ProductsList() {
    useFetchProductsList();

    const products = useProductsList();

    const loading = useSelector(selectLoading);
    return (
        <div>
            <h1>Products list</h1>
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
