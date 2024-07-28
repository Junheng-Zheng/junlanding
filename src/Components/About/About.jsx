import React, { useState, useEffect } from "react";
import styles from "./About.module.css";


export const About = () => {
    return (
        <div  className={styles.projectSection}>
            <div className={styles.projectsWrapper}>
                <div class={styles.grid1}><img src="assets/nav/HeroPageProfile.jpg"></img></div>
                <div class={styles.grid2}>
                    <section class={styles.grid2TechStack}>
                        <img src="../../src/assets/nav/HTML5.png"></img>
                        <img src="assets/nav/CSS3.png"></img>
                        <img src="assets/nav/JavaScript.png"></img>
                        <img src="assets/nav/React.png"></img>
                        <img src="assets/nav/Python.png"></img>
                        <img src="assets/nav/Java.png"></img>
                        <img src="assets/nav/Flutter.png"></img>
                        <img src="assets/nav/MySQL.png"></img>
                        <img src="assets/nav/VSCode.png"></img>
                        <img src="assets/nav/Vite.js.png"></img>
                        <img class={styles.grid2TechStackshow} src="assets/nav/FileZilla.png"></img>
                        <img class={styles.grid2TechStackshow} src="assets/nav/PHP.png"></img>
                        <img class={styles.grid2TechStackshow} src="assets/nav/Adobe Illustrator.png"></img>
                        <img class={styles.grid2TechStackshow} src="assets/nav/Adobe Photoshop.png"></img>
                        <img class={styles.grid2TechStackshow} src="assets/nav/Figma.png"></img>
                    </section>
                </div>
                <div class={styles.grid3}>
                    <section class={styles.grid3h3}>
                        <h2>Skills</h2>
                        <h2>✦</h2>
                    </section>
                    <ul>
                        <li>Web Design</li>
                        <li>App Design</li>
                        <li>Full-Stack Dev</li>
                        <li>UI/UX Design</li>
                    </ul>
                </div>
                <div class={styles.grid4}> 
                    <section class={styles.grid4header}>
                        <h2>About</h2>
                    </section>
                    <p>Hi, my name is Junheng Zheng. I am a passionate web-designer from NYC. I am an upcoming junior 
                        studying front-end design at the Rochester Institute of Technology. 
                    </p>
                </div>
                <div class={styles.grid5}>
                    <section class={styles.grid5flex}>
                        <img src="assets/socials/linkedinicon.png"></img>
                        <img src="assets/socials/githubicon.png"></img>
                        <img src="assets/socials/xicon.png"></img>
                        <img src="assets/socials/instagramicon.png"></img>
                    </section>
                </div>
            </div>
        </div>
      );
}

