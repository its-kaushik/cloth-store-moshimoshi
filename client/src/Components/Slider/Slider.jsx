import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';

import "./Slider.scss";

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "/img/slide-A.jpg",
        "/img/slide-B.jpg",
    ]

    const prevSlide = () => {
        setCurrentSlide( currentSlide === 0 ? 1 : (prev) => prev - 1 );
    };

    const nextSlide = () => {
        setCurrentSlide( currentSlide === 1 ? 0 : (prev) => prev + 1 );
    };

    return(
        <div className="slider">
            <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}} >
                <img src={data[0]} alt="advertisement-banner" />
                <img src={data[1]} alt="advertisement-banner" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide} >
                    <ArrowBackIcon />
                </div>
                <div className="icon" onClick={nextSlide} >
                    <ArrowForwardIcon />
                </div>
            </div>
        </div>
    );
}

export default Slider ;