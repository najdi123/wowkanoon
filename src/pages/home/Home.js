import Layout from "../../components/Layout";
import React from "react";
import Carousel from "../../components/carousel/Carousel";
import Header from "../../components/header/Header";
import styles from "./home.module.css";

const Home = () => {
    return (
        <Layout home>
            <div className='position-relative'>
                <Header/>
                <div className={styles.btnStart}>Start</div>
            </div>

            <div className="container mt-4">
                <h3 className='text-center'>Play with 7666 words and compete with 59346 learners in World of Words (WoW)</h3>
                <Carousel/>
            </div>


        </Layout>
    );
};

export default Home;