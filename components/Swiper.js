import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";

// import "7410./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

export default function Slide() {
  return (
    <div style={{marginBottom:20}}>
   
    
    <div  style={{ height: "400px", width:"100%", 
          background: "lightgrey"}}>

<h1
    style={{
        fontSize:"50px",
        fontWeight:"1000px",
        // marginLeft:"100px",
        color:"black",
        textAlign:'center',
        // paddingTop:"10px",
        marginBottom:"70px"
    
    }}>SUCCESS STORIES</h1>
    
      <Swiper
        // navigation={true}
        pagination={{
          clickable:true
        }}
        autoplay={{
          delay:4000,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper">
       
      
        <SwiperSlide style={{display:"flex",justifyContent:'space-between',alignItems:'center'}}>
          <div style={{ width:"30%"}}><img src="pic1.jpg" style={{width:"300px",marginLeft:"30%", borderRadius:"10px", borderTopLeftRadius:"10px",opacity:"0.8"}}/></div>
          <div style={{ width:"60%"}}> 

          <p style={{ fontSize:"20px", width:"600px", opacity:"0.7",fontWeight:'lighter',fontWeight:'lighter', color:"black"}}>
          Empire academy trainers are very well trained and will be there to help you throughout the course but this job involves a constant learning process, and you need to learn how to learn
          </p>

          <h1 style={{ fontSize:"25px",fontWeight:"bold" , marginTop:"30px",opacity:"0.7",color:"blue",fontWeight:'lighter'}}>Tony Kimpembe</h1>
          <p style={{color:"black", fontSize:"17px", opacity:"0.7",fontWeight:'lighter'}}>
          Software Developer at Richfield
          </p>
          </div>
            
        </SwiperSlide>

        <SwiperSlide style={{display:"flex",justifyContent:'space-between',alignItems:'center'}}>
          <div style={{ width:"30%"}}><img src="pic2.jpg" style={{width:"300px",marginLeft:"30%", borderRadius:"10px", borderTopLeftRadius:"10px",opacity:"0.8"}}/></div>
          <div style={{ width:"60%"}}> 

          <p style={{ fontSize:"20px", width:"600px", opacity:"0.7",fontWeight:'lighter', color:"black"}}>
         The biggest advantage i have gotten from the class is that i have a much better understanding of software development and its related details in most of the larger parts.
          </p>

          <h1 style={{ fontSize:"25px",fontWeight:"bold" , marginTop:"30px",opacity:"0.7",color:"blue",fontWeight:'lighter'}}>Cynthia Dacosta</h1>
          <p  style={{color:"black", fontSize:"17px", opacity:"0.7",fontWeight:'lighter'}}>
          Software Developer at AI Business.Co
          </p>

          
          </div>
            
        </SwiperSlide>

        <SwiperSlide style={{display:"flex",justifyContent:'space-between',alignItems:'center'}}>
          <div style={{ width:"30%"}}><img src="pic03.jpg" style={{width:"400px",marginLeft:"30%", borderRadius:"10px", borderTopLeftRadius:"10px",opacity:"0.8", color:"white"}}/></div>
          <div style={{ width:"60%"}}> 

          <p style={{fontSize:"20px", width:"600px", opacity:"0.7",fontWeight:'lighter', color:"black"}}>
           I saw the Empire Academy informative meeting pop-up and it was earlier than th eplanned one so i decided to go. i loved the meeting, it was really fun and convincing and i signed the contract right away.Best decision ever!
          </p>

          <h1 style={{ fontSize:"25px",fontWeight:"bold" , marginTop:"30px",opacity:"0.7",color:"blue",fontWeight:'lighter'}}>Michelle Orlean</h1>
          <p  style={{color:"black", fontSize:"17px", opacity:"0.7",fontWeight:'lighter'}}>
          Software Developer at Parktown
          </p>

          
          </div>
            
        </SwiperSlide>

        
      </Swiper>
    </div>
    </div>

  );
}
