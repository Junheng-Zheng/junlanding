import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
    const [typedName, setTypedName] = useState('');

    useEffect(() => {
        const fullName = 'Junheng Zheng';
        let currentIndex = 0;

        const interval = setInterval(() => {
            if (currentIndex <= fullName.length) {
                setTypedName(fullName.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 120);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.heroSection}>
            <div className={styles.heroMain}>
                <h2>Hi, my name is</h2>
                <h1 className={styles.heroName}>{typedName}</h1>
                <h1 className={styles.heroAbout}>A Web-Developer based in NYC</h1>
                <div className={styles.heroContact}>
                    <a href="#contacts">Contact</a>
                </div>
            </div>
                {/* <img src="assets\nav\HeroPageProfile.jpg"></img> */}
        </div>
    );
}

