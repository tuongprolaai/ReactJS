import { useGetProvincesQuery } from "@/features/address/addressSlice";
import { Link } from "react-router";

function ProvincesList1() {
    const { isLoading, data } = useGetProvincesQuery();

    return (
        <div>
            <h1>Products list</h1>
            <Link to="/address/provinces">List</Link>
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

export default ProvincesList1;
