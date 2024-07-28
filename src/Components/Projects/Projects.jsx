import React, { useState, useEffect } from "react";
import styles from "./Projects.module.css";


export const Projects = () => {
    return (
        <div className={styles.projectSection}>
          <div className={styles.slider}>
           <div className={styles.slide}>
           <img className={styles.slideimage} src="assets\nav\weatherlite.jpg"></img>
              <div className={styles.slideheader}>
                <h2>WeatherLite</h2>
                <div>
                  <img src="assets\nav\Flutter.png"></img>
                </div>
              </div>
              <p>A simple weather app created with Flutter</p>
              <div className={styles.slidebutton}>
                <a>Learn More</a>
              </div>
              </div>
              <div className={styles.slide}>
           <img className={styles.slideimage} src="assets\nav\weatherlite.jpg"></img>
              <div className={styles.slideheader}>
                <h2>WeatherLite</h2>
                <section>
                  <img src="assets\nav\HTML5.png"></img>
                  <img src="assets\nav\CSS3.png"></img>
                  <img src="assets\nav\JavaScript.png"></img>
                  <img src="assets\nav\PHP.png"></img>
                </section>
              </div>
              <p>A simple weather app created with Flutter</p>
              <div className={styles.slidebutton}>
                <a>Learn More</a>
              </div>
              </div>
                     <div className={styles.slide}>
           <img className={styles.slideimage} src="assets\nav\weatherlite.jpg"></img>
              <div className={styles.slideheader}>
                <h2>WeatherLite</h2>
                <div>
                  <img src="assets\nav\Vite.js.png"></img>
                  <img src="assets\nav\React.png"></img>
                </div>
              </div>
              <p>A simple weather app created with Flutter</p>
              <div className={styles.slidebutton}>
                <a>Learn More</a>
              </div>
              </div>
          </div>
          </div>
      );
}

