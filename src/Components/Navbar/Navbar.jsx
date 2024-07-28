import React, {useState} from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return <nav className={styles.navbar}>
        <a className={styles.title} href= "/"> JZ</a>
        <div className={styles.menu}>
            <img 
            className={styles.menubtn} 
            src={
                menuOpen 
                ? getImageUrl("nav/menuIcon.png")
                : getImageUrl("nav/menuIcon.png")
            }
            alt = "menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul className = {`${styles.menuItem} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}>
                <li><a href="#about">About</a></li>
                <li><a href="#about">Projects</a></li>
                <li><a href="#about">Contacts</a></li>
            </ul>
        </div>
    </nav>
}