"use client";

import React from "react";
import styles from "./Accueil.module.css";


const DashboardWelcome = () => {
    return (
        <div className={styles.container}>
            <div className={styles.introSection}>
                <h1 className={styles.title}>Tableau de bord CyberTool</h1>
                <p className={styles.subtitle}>
                    Visualisez en un coup d&apos;œil les statistiques, chiffres clés et tendances des cyberattaques.
                </p>
            </div>

            <div className={styles.cardGrid}>
                <div className={styles.card}>
                    <p>
                        Découvrez des graphiques sur les types de cyberattaques que l&apos;on retrouve le plus souvent.
                    </p>
                </div>
                <div className={styles.card}>
                    <p>
                        Accédez à des indicateurs majeurs comme les incidents ANSSI, les victimes ou les volumes
                        d’attaques.
                    </p>
                </div>
                <div className={styles.card}>
                    <p>
                        Restez informé avec un fil d’actualités sur les cybermenaces et les incidents récents.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default DashboardWelcome;
