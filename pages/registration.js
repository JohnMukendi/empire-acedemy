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
              <span style={{marginLeft:"15px"}}>I agree to the terms & conditions</span>{" "}
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
