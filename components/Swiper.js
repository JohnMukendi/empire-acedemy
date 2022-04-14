import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";

export default function Slide() {
  return (
<div>
    <h1
    style={{
        fontSize:"50px",
        fontWeight:"1000px",
        marginLeft:"135px",
    
    }}>Success Stories</h1>
    
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        style={{ height: "300px", width:"100%"}}>
      
        <SwiperSlide style={{display:"flex",justifyContent:'space-between',alignItems:'center'}}>
          <div style={{ width:"30%"}}><img src="pic1.jpg" style={{width:"400px",marginLeft:"140px", borderRadius:"10px", borderTopLeftRadius:"10px",opacity:"0.8"}}/></div>
          <div style={{ width:"60%"}}> 

          <p style={{color:"black", fontSize:"20px", width:"600px", opacity:"0.7"}}>
          Empire academy trainers are very well trained and will be there to help you throughout the course but this job involves a constant learning process, and you need to learn how to learn
          </p>

          <h1 style={{ fontSize:"25px",fontWeight:"bold" , marginTop:"30px",opacity:"0.7",color:"blue"}}>Tony Kimpembe</h1>
          <p style={{color:"black", fontSize:"17px", opacity:"0.7"}}>
          Software Developer at Richfield
          </p>

          
          </div>
            
        </SwiperSlide>

        <SwiperSlide style={{display:"flex",justifyContent:'space-between',alignItems:'center'}}>
          <div style={{ width:"30%"}}><img src="pic2.jpg" style={{width:"400px",marginLeft:"140px", borderRadius:"10px", borderTopLeftRadius:"10px",opacity:"0.8"}}/></div>
          <div style={{ width:"60%"}}> 

          <p style={{color:"black", fontSize:"20px", width:"600px", opacity:"0.7"}}>
         The biggest advantage i have gotten from the class is that i have a much better understanding of software development and its related details in most of the larger parts.
          </p>

          <h1 style={{ fontSize:"25px",fontWeight:"bold" , marginTop:"30px",opacity:"0.7",color:"blue"}}>Cynthia Dacosta</h1>
          <p  style={{color:"black", fontSize:"17px", opacity:"0.7"}}>
          Software Developer at AI Business.Co
          </p>

          
          </div>
            
        </SwiperSlide>

        <SwiperSlide style={{display:"flex",justifyContent:'space-between',alignItems:'center'}}>
          <div style={{ width:"30%"}}><img src="pic03.jpg" style={{width:"400px",marginLeft:"140px", borderRadius:"10px", borderTopLeftRadius:"10px",opacity:"0.8"}}/></div>
          <div style={{ width:"60%"}}> 

          <p style={{color:"black", fontSize:"20px", width:"600px", opacity:"0.7"}}>
           I saw the Empire Academy informative meeting pop-up and it was earlier than th eplanned one so i decided to go. i loved the meeting, it was really fun and convincing and i signed the contract right away.Best decision ever!
          </p>

          <h1 style={{ fontSize:"25px",fontWeight:"bold" , marginTop:"30px",opacity:"0.7",color:"blue"}}>Michelle Orlean</h1>
          <p  style={{color:"black", fontSize:"17px", opacity:"0.7"}}>
          Software Developer at Parktown
          </p>

          
          </div>
            
        </SwiperSlide>

        
      </Swiper>
    </>

</div>

  );
}
