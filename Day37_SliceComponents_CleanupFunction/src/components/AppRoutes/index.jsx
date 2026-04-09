import { BrowserRouter as Router, Routes, Route } from "react-router";

// Pages
import Home from "../../pages/Home";
import News from "../../pages/News";
import Contact from "../../pages/Contact";
import Dashboard from "../../pages/Dashboard";

// Layouts
import DefaultLayout from "../../layouts/DefaultLayout";
import SidebarLayout from "../../layouts/SidebarLayout";
import AdminLayout from "../../layouts/AdminLayout";
import PostDetail from "../../pages/PostDetail";
import NewsTrashed from "../../pages/NewsTrashed";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />}></Route>
        </Route>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/news/trashed" element={<NewsTrashed />}></Route>
          <Route path="/news/:id" element={<PostDetail />}></Route>
          {/* Default Layout pages */}
        </Route>
        z
        <Route element={<SidebarLayout />}>
          <Route path="/contact" element={<Contact />}></Route>
          {/* Sidebar Layout pages */}
        </Route>
        {/* No layout pages */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
