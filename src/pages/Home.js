import Navbar from '../components/Navbar'
import Layout from "../components/Layout";
import React from "react";
import Carousel from "../components/Carousel";

const Home = () => {
    return (
        <Layout home>
            <div className="container">Home</div>
            <Carousel/>
        </Layout>
    );
};

export default Home;
