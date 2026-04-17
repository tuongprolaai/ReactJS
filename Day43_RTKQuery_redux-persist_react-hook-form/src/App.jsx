import { BrowserRouter, Routes, Route } from "react-router";
import { useEffect, lazy } from "react";

// Components
import Header from "./components/Header";
import AuthProvider from "./components/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";

// Pages
// import Counter from "./pages/Counter";
const Counter = lazy(()=> import("@/pages/Counter"))
import Icon from "./pages/Icon";
import ProductsList from "./pages/ProductsList";
import ProvincesList from "./pages/Address/ProvincesList";
import ProvincesList1 from "./pages/Address/ProvincesList1";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import PortalDemo from "./pages/PortalDemo";

import { httpClient } from "./utils/http";

function App() {


  useEffect(()=>{
    httpClient.get("/auth/devices")
  },[])

  return (
    <BrowserRouter>
      <AuthProvider />
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/products" element={<ProductsList />}></Route>
        <Route path="/icons" element={<Icon />}></Route>
        <Route path="/address/provinces" element={<ProvincesList />}></Route>
        <Route path="/address/provinces1" element={<ProvincesList1 />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/portal-demo" element={<PortalDemo />}></Route>

        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
