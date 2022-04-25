//FOR JOHN,GRADY AND RICO
import Navbar from '../components/navbar'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/dist/client/image'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'



const imgpath = "/campus image1.jpg"
const logopath = "/e logo.png"

export default function Home() {
  return (
    <>
    <Head>
      <title>Empire Acedemy | Home</title>
      <link></link>
    </Head>
    <header className={styles.header}>
      <Navbar />
    
      <div className={styles.titleDiv}>
        <div className={styles.logoDiv2}>
          <img src={logopath} alt="logo" />
        </div>
        MPIRE ACEDEMY
      </div>
    </header>
    <Testimonials/>
    
   

    </>
    
    )
}
