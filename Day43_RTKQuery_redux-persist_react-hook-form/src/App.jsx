import { BrowserRouter, Routes, Route } from "react-router";
import Counter from "./pages/Counter";
import Icon from "./pages/Icon";
import ProductsList from "./pages/ProductsList";
import ProvincesList from "./pages/Address/ProvincesList";
import ProvincesList1 from "./pages/Address/ProvincesList1";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/counter" element={<Counter />}></Route>
                    <Route path="/products" element={<ProductsList />}></Route>
                    <Route path="/icons" element={<Icon />}></Route>
                    <Route
                        path="/address/provinces"
                        element={<ProvincesList />}
                    ></Route>
                    <Route
                        path="/address/provinces1"
                        element={<ProvincesList1 />}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
