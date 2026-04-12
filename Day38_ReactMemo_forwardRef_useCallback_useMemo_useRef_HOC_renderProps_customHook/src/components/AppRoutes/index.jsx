import { BrowserRouter as Router, Routes, Route } from "react-router";

// Pages
import Home from "@/pages/Home";
import News from "@/pages/News";
import Contact from "@/pages/Contact";
import Dashboard from "@/pages/Dashboard";

// Layouts
import DefaultLayout from "@/layouts/DefaultLayout";
import SidebarLayout from "@/layouts/SidebarLayout";
import AdminLayout from "@/layouts/AdminLayout";
import PostDetail from "@/pages/PostDetail";
import NewsTrashed from "@/pages/NewsTrashed";
import UploadAvatar from "@/pages/UploadAvatar";
import Hooks from "@/pages/Hooks";
import HOC from "@/pages/HOC";
import RenderProps from "@/pages/RenderProps";
import CustomHook from "@/pages/CustomHook";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />}></Route>
                </Route>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />}></Route>
                    <Route
                        path="/uploadavatar"
                        element={<UploadAvatar />}
                    ></Route>
                    <Route path="/news" element={<News />}></Route>
                    <Route
                        path="/news/trashed"
                        element={<NewsTrashed />}
                    ></Route>
                    <Route path="/news/:id" element={<PostDetail />}></Route>
                    {/* Default Layout pages */}
                </Route>
                z
                <Route element={<SidebarLayout />}>
                    <Route path="/contact" element={<Contact />}></Route>
                    {/* Sidebar Layout pages */}
                </Route>
                {/* No layout pages */}
                <Route path="/hooks" element={<Hooks />}></Route>
                <Route path="/hoc" element={<HOC />}></Route>
                <Route path="/render-props" element={<RenderProps />}></Route>
                <Route path="/custom-hook" element={<CustomHook />}></Route>
            </Routes>
        </Router>
    );
}

export default AppRoutes;
