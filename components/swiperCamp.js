import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


export default function Slide() {
  return (
    <> 
    
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{height: "500px", width: "170px", border: "2px solid red"}}
        >
        </SwiperSlide>
        <SwiperSlide style={{height: "500px", width: "170px", border: "2px solid red"}}
        >Music<img style={{
            height:'100%',
            width:'100%'
        }} src=""/>
            
        </SwiperSlide>
        <SwiperSlide style={{height: "500px", width: "170px", border: "2px solid red"}}
        >FASHION<img style={{
            height:'100%',
            width:'100%'
        }} src=""/>
            
        </SwiperSlide>
        <SwiperSlide style={{height: "500px", width: "170px", border: "2px solid red"}}
        >IT<img style={{
            height:'100%',
            width:'100%'
        }} src=""/>
            
        </SwiperSlide>
        <SwiperSlide style={{height: "500px", width: "170px", border: "2px solid red"}}
        >ARCHITECTURE<img style={{
            height:'100%',
            width:'100%'
        }} src=""/>
            
        </SwiperSlide>
        <SwiperSlide style={{height: "500px", width: "100%", border: "2px solid red"}}
        >GRAPHIC DESIGN<img style={{
            height:'100%',
            width:'100%'
        }} src=""/>
            
        </SwiperSlide>
        <SwiperSlide style={{height: "500px", width: "170px", border: "2px solid red"}}
        >TRADING<img style={{
            height:'100%',
            width:'100%'
        }} src=""/>
            
        </SwiperSlide>
        <SwiperSlide style={{height: "200px", width: "170px", border: "2px solid red"}}
        >THEOLOGY<img style={{
            height:'100%',
            width:'100%'
        }} src=""/>
            
        </SwiperSlide>
        <SwiperSlide style={{height: "200px", width: "170px", border: "2px solid red"}}
        >ENTREPRENEURSHIP<img style={{
            height:'100%',
            width:'100%'
        }} src=""/>
            
        </SwiperSlide>
      </Swiper>
    </>
  );
}
