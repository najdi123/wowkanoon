import Layout from "../components/Layout";
import React from "react";
import Carousel from "../components/carousel/Carousel";
import Header from "../components/header/Header";
import styles from "../components/header/header.module.css";

const Home = () => {
    return (
        <Layout home>
            <div>
                <Header/>
                <div className={styles.btnStart}>Start</div>
            </div>
            <div className="container mt-4">
                <Carousel/>
            </div>


        </Layout>
    );
};

export default Home;
