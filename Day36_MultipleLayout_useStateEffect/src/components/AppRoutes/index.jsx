import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "../../pages/Home";
import News from "../../pages/News";
import Contact from "../../pages/Contact";
import DefaultLayout from "../../layouts/DefaultLayout";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/news" element={<News />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default AppRoutes;
