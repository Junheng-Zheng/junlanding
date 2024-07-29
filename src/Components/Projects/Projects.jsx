import React, { useState, useEffect } from "react";
import styles from "./Projects.module.css";


export const Projects = () => {
    return (
        <div className={styles.projectSection}>
          <div className={styles.slider}>
           <div className={styles.slide}>
           <img className={styles.slideimage} src="./assets/nav/weatherlite.jpg"></img>
              <div className={styles.slideheader}>
                <h2>WeatherLite</h2>
              </div>
              <p>A basic and simple weather app that allows users to check weather from different locations.
                 Created with flutter. </p>
              <div className={styles.slidebutton}>
                <a>Learn More</a>
              </div>
              </div>
              <div className={styles.slide}>
           <img className={styles.slideimage} src="./assets/nav/manhattanpage.jpg"></img>
              <div className={styles.slideheader}>
                <h2>Discover Manhattan</h2>
              </div>
              <p>A website showcasing Manhattan, NYC. Created with HTML, CSS, JS and PHP</p>
              <div className={styles.slidebutton}>
                <a>Learn More</a>
              </div>
              </div>
                     <div className={styles.slide}>
           <img className={styles.slideimage} src="./assets/nav/landingpage.jpg"></img>
              <div className={styles.slideheader}>
                <h2>This Landing Page</h2>
              </div>
              <p>A responsive website showcasuing me and my work. Created with Vite and React</p>
              <div className={styles.slidebutton}>
                <a>Learn More</a>
              </div>
              </div>
          </div>
          </div>
      );
}

