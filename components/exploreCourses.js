//import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";
import styles from "../styles/courses.module.css";
import courses from "./courses.json";
import { useState } from "react";

var gradient = "linear-gradient(rgba(240,240,250,0.87),rgba(220,220,250,0.7))";
var gradient2 = "linear-gradient(rgba(200,200,250,0.87),rgba(220,220,250,0.7))";


const ExploreCourses = () => {
  //functionality 

  return (
    <>
      <div
    
        style={{
          background: "lightgrey",
          padding: "40px",
          color: "black",
          // margin: "8px",
          marginTop:"-20px"
         
        }}
      >
        
        <div style={{ padding: "10px 0px 20px 0px" }}>
          <h2
            style={{
              fontSize: "40px",
              textAlign: "center",
              paddingBottom: "20px",
            }}
          >
            EXPLORE OUR COURSES
          </h2>
          <p style={{marginLeft:"386px", fontSize: "18px",width:"600px", fontWeight:"lighter"}}>
            Here at <b>Empire Acedemy</b> we offer you 8 subject variations that <br/>
            are widely considered as important jobs and world changing
          </p>
        </div>
        <div className={styles.swiperDiv} >
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            speed={2000}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              loop: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay]}
            className={styles.coursesSwiper}
          >
            {courses.map((course) => (
              <SwiperSlide>
                <div 
                  key={course.id} className={styles.courseDiv}
                  style={{
                    backgroundImage: `${gradient},url(${course.image})`,
                    height: "400px",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  
                >
                  <h4
                    style={{
                      textAlign: "center",
                      fontSize: "28px",
                      padding: "20px",
                      color: "black",
                      borderBottom: "3px dotted rgb(10,10,140)",
                    }}
                  >
                    {course.courseName}
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      height: "80%",
                      alignItems: "center",
                      padding: "0px 40px",
                    }}
                  >
                    <p
                      style={{
                        color: "black",
                        fontSize: "22px",
                        textAlign: "center",
                        lineHeight: "1.5",
                      }}
                    >
                      {course.courseInfo}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
//Pause and READ

//const button = <button className={styles.pauseButton} onClick={Pause()}>Pause and Read</button>

export default ExploreCourses;
