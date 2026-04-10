import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Sidebar from "./components/Sidebar";

import styles from "./SidebarLayout.module.scss"
function SidebarLayout() {
  return (
    <>
      <Header />
      <Navigation />
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.content}>
          <Outlet />
        </div>
        <Sidebar />
      </div>
      <Footer />
    </>
  );
}

export default SidebarLayout;
