import React, {useState} from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    return <nav className={styles.navbar}>
        <a className={styles.title} href= "/"> JZ</a>
            <ul className ={styles.menuItem}
            onClick={() => setMenuOpen(false)}>
                <li><a href="#about">About</a></li>
                <li><a href="#about">Projects</a></li>
                <li><a href="#about">Contacts</a></li>
            </ul>
    </nav>
}