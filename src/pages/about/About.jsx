import React from "react";
import styles from "./About.module.css";

export const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <h1 className={styles.aboutTitle}>About Us</h1>
            <p className={styles.aboutText}>
                Welcome to our movie app! This application allows users to explore a wide range of movies,
                view detailed information, and discover new favorites. Our mission is to create a
                user-friendly and enjoyable experience for all movie enthusiasts.
            </p>
            <p className={styles.aboutText}>
                Our team is passionate about movies and technology, and we're constantly working on improving
                the app to bring you the latest features and enhancements. We hope you enjoy using it as
                much as we enjoyed building it!
            </p>
        </div>
    );
};
