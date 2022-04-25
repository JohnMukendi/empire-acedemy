//FOR JOHN
import Head from "next/head";
import styles from "../styles/courses.module.css";
import Navbar from "../components/navbar";
import subs from "../components/courses.json";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import ControlledAccordions from "../components/accord";
//Accordion Imports
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

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
    <>
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
      <p className={styles.pageInfo}>
        Find out more about your dream Career Path and you can trust that we
        will provide you with the best tools to optimize your learning
        expirience here at <b>EMPIRE ACEDEMY</b>!
      </p>
      {subjects.map((course, index) => (
        <div>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={styles.subjectDivHeader}
            >
              {course.courseName}
            </AccordionSummary>
            <AccordionDetails>
              <div className={styles.subjectDiv}
                   style={{
                    backgroundImage: `${gradient},url(/${course.image})`
                    
                  }}
                  key={course.id}
              >
                  {course.fullInfo}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </>
  );
};

export default courses;
