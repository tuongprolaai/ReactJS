import { useGetProvincesQuery } from "@/features/address/addressSlice";
import { Link } from "react-router";

function ProvincesList() {
    const { isLoading, data } = useGetProvincesQuery();

    return (
        <div>
            <h1>Products list</h1>
            <Link to="/address/provinces1">List 1</Link>
            <Link to="/products">List products</Link>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <ul>
                    {data.map((province) => (
                        <li key={province.province_id}>{province.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ProvincesList;
