import react from 'react';
import {Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {banners} from '../data/banners'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./BannerSlider.css";

const BannerSlider = () => {
    return (
        <div className="banner-container">
        <Swiper modules={[Autoplay, Pagination, Navigation]}
        autoplay={{delay: 3000, disableOnInteraction: false }}
        pagination={{clickable: true }}
        navigation
        loop
        className='banner-swiper'
        >
           {banners.map((banner)=>(
            <SwiperSlide key={banner.id}>
                <a href={banner.url} target="_blank" rel="noopener noreferrer" className="slide-link">
                <div className='slide'>
                <img src={banner.image} alt={banner.title}/>
                <div className="overlay">
                    <h2>{banner.title}</h2>
                </div>
                </div>
                </a>
            </SwiperSlide>
           ))}
        </Swiper>
        </div>
    );
};

export default BannerSlider;