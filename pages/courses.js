//FOR JOHN
import Head from "next/head";
import styles from "../styles/courses.module.css";
import Navbar from "../components/navbar";
import subs from "../components/courses.json";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import ControlledAccordions from "../components/accord";
import Link from 'next/link'
//Accordion Imports
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";


//Courses Component
const courses = () => {
  var gradient =
    "linear-gradient(rgba(240,240,250,0.87),rgba(220,220,250,0.7))";
  //state hooks

  const [subjects, setSubject] = useState(subs);
  const [visibility, setVisibility] = useState("none");

  var angleDown = <FaAngleDown />;
  var [angleDown, setAngle] = useState(angleDown);
  
  

  //functionality
  const display = function () {
     if(visibility == "none"){
         setVisibility("block")
         setAngle(<FaAngleUp/>)
     }
     else{
         setVisibility("none")
         setAngle(<FaAngleDown/>)
     }
  };
  
  return (
    <div>
      <Head>
        <title>Empire Acedemy | Courses</title>
      </Head>
      <header className={styles.header}>
        <Navbar />
        <div className={styles.pageTitle}>
          <h3 className={styles.title}>OUR COURSES</h3>
        </div>
      </header>
      <ControlledAccordions />
      <p className={styles.pageInfo} style={{fontWeight:"lighter"}}>
        Find out more about your dream Career Path and you can trust that we
        will provide you with the best tools to optimize your learning
        expirience here at <b>EMPIRE ACEDEMY</b>!
      </p>
      {/* Mapping through json array */}
      
      {subs.map((course, index) =>  (
      
        
        <div>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              
            
            >
              <div key={index} className={styles.subjectDivHeader} onClick={display}>
                <p>{course.courseName}</p>
                <div className={styles.icon}>{angleDown}</div>
            </div>
            </AccordionSummary>
            <AccordionDetails>
            <div className={styles.subjectDiv}
                   style={{
                    backgroundImage: `${gradient},url(/${course.image})`
                    
                  }}
                  key={course.id}
              >
                  {course.fullInfo}

              <div className={styles.courseImagesDiv}>
                  <div>
                    
                      
                    
                     
                    <img src = {`${course.pictures}`} alt="" />
                  </div>
              </div>

              {/* outputting branches */}
              <div className={styles.courseDiv2}>
                <div className={styles.courseDivContainer}>

                
                {subs[index].branches.map((branch,index) => (

                    <div className={styles.coursePicturesDiv}>
                      <h4 title={branch.branchName} className={styles.branchName}>{branch.branchName}</h4>
                      <div className={styles.branchImageDiv}>
                        <img className={styles.branchImage} src={branch.branchImage} alt={branch.branchName +'image'} />
                      </div>
                      
                    </div>
                  
                ))}
                </div>
              </div>

              {/* apply now button */}
              <div className={styles.btnDiv}>
                 
                  <Link href="./Payment"><a><button className={styles.applyBtn}>APPLY NOW</button></a></Link>
              </div>
                  
            </div>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default courses;
