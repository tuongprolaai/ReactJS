import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "../../pages/Home";
import News from "../../pages/News";
import Contact from "../../pages/Contact";
import Navigation from "../Navigation";

function AppRoutes() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/news" element={<News />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </Router>
    );
}

export default AppRoutes;
