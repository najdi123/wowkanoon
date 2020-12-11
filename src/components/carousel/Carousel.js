import React from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";


import img1 from '../../images/504.png'
import img2 from '../../images/1100.png'
import img3 from '../../images/GRE.png'
import img4 from '../../images/IELTS.png'
import img5 from '../../images/longman.png'
import img6 from '../../images/pre-uni.png'
import img7 from '../../images/TOEFL.png'
import img8 from '../../images/phonetic.png'
import img9 from '../../images/7.png'
import img10 from '../../images/8.png'
import img11 from '../../images/9.png'
import img12 from '../../images/10.png'
import img13 from '../../images/11.png'
import styles from './carousel.module.css';

function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block", background: "red"}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block", background: "green"}}
            onClick={onClick}
        />
    );
}

const Carousel = () => {

    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 8,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    };

    const items = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
    ]


    return (
        <div className={styles.carousel}>
            <Slider {...settings}>
                {items.map((item, index) => {
                    return (<div className={`${styles.carouselItem}`}>
                        <img key={index} src={item}/>
                    </div>)
                })}
            </Slider>
        </div>
    );
};

export default Carousel;
