//FOR GRADY
import Head from "next/head";
import styles from "../styles/registration.module.css";
import Navbar from "../components/navbar";
import { useState } from "react";
import Link from "next/link";

const registrations = () => {

  return (
    <>
      <Head>
        <title>Empire Acedemy | Registrations</title>
      </Head>

      <header className={styles.header}>
        <Navbar />
        <div className={styles.pageTitle}>
          <h3 className={styles.title}>REGISTRATION</h3>
        </div>
      </header>

      <div>
     
        <div className={styles.hero}>
          <div className={styles.formBox}>
            <div className={styles.buttonBox}>
              <div id={styles.btn}></div>
              <button className={styles.toggleBtn}>REGISTRATION</button>
            </div>

            <div className={styles.socialIcons}>
              <img src="fb.png" />
              <img src="tw.png" />
              <img src="gp.png" />
            </div>
            

            <form id={styles.Login} className={styles.inputGroup}>
              <input
                type="text"
                className={styles.inputField}
                placeholder="User Id"
                required
              />
               <input
                type="email"
                className={styles.inputField}
                placeholder="Email Id"
                required
              />
              <input
                type="text"
                className={styles.inputField}
                placeholder="Enter Password"
                required
              />
              <span style={{ paddingTop:"10px", fontSize}}>I AGREE TO THE TERMS & CONDITIONS</span>{" "}
              <input type="checkbox" className={styles.checkBox} />
              <button type="submit" className={styles.submitBtn}>Register </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default registrations;





// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Navbar from "../components/navbar";
// import styles from "../styles/registration.module.css";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (

//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// export default function BasicTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (

// <div>
//   <Navbar/>
  
//     <Box sx={{ width: '100%',}}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           <Tab label="Item One" {...a11yProps(0)} />
//           <Tab label="Item Two" {...a11yProps(1)} />
//         </Tabs>
//       </Box>

    


//       <TabPanel value={value} index={0}>
//        hello world
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two
//       </TabPanel>
//     </Box>
// </div>
  

     
//   );
 
// }