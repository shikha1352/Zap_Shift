import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../../assets/brands/amazon.png";
import casio from "../../../assets/brands/casio.png";
import moonstart from "../../../assets/brands/moonstar.png";
import randstat from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start_people from "../../../assets/brands/start_people.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import {Autoplay} from 'swiper/modules';
const Brands = () => {
  const brandLogos = [
    amazon,
    casio,
    moonstart,
    randstat,
    star,
    start_people,
    amazon_vector,
  ];
  return (
    <div>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
       
      >
        {
            brandLogos.map((logo,index)=> <SwiperSlide key={index}>
                <img src={logo} alt="" />
            </SwiperSlide>)
        }
        
      </Swiper>
    </div>
  );
};

export default Brands;
