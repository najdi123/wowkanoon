import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../images/504.png'
import img2 from '../images/1100.png'
import img3 from '../images/GRE.png'
import img4 from '../images/IELTS.png'
import img5 from '../images/longman.png'
import img6 from '../images/pre-uni.png'
import img7 from '../images/TOEFL.png'
import img8 from '../images/phonetic.png'
import img9 from '../images/7.png'
import img10 from '../images/8.png'
import img11 from '../images/9.png'
import img12 from '../images/10.png'
import img13 from '../images/11.png'

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
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    };
    return (
        <div className='w-full'>
            <Slider {...settings}>
                <div>
                    <img src={img1}/>
                </div>
                <div>
                    <img src={img2}/>
                </div>
                <div>
                    <img src={img3}/>
                </div>
                <div>
                    <img src={img4}/>
                </div>
                <div>
                    <img src={img5}/>
                </div>
                <div>
                    <img src={img6}/>
                </div>
                <div>
                    <img src={img7}/>
                </div>
                <div>
                    <img src={img8}/>
                </div>
                <div>
                    <img src={img9}/>
                </div>
                <div>
                    <img src={img10}/>
                </div>
                <div>
                    <img src={img11}/>
                </div>
                <div>
                    <img src={img12}/>
                </div>
                <div>
                    <img src={img13}/>
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
