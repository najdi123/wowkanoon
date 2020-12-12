import Layout from "../components/Layout";
import React from "react";
import Carousel from "../components/carousel/Carousel";
import Header from "../components/header/Header";

const Home = () => {
    return (
        <Layout home>
           <div style={{backgroundColor:'#33a3dc'}}>
               <div className="container ">
                   <Header/>
               </div>
           </div>
            <div className="container mt-4">
                <Carousel/>
            </div>


        </Layout>
    );
};

export default Home;
