import { NavLink } from "react-router";

import styles from "./Navigation.module.scss";

const navItems = [
    {
        to: "/",
        title: "Home",
    },
    {
        to: "/news",
        title: "News",
    },
    {
        to: "/contact",
        title: "Contact",
    },
];

function Navigation() {
    return (
        <div className={styles.wrapper}>
            <ul>
                {navItems.map((navItem, index) => (
                    <li key={index}>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? styles.active : ""
                            }
                            to={navItem.to}
                        >
                            {navItem.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navigation;
