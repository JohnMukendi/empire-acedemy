//FOR RICO
import Head from 'next/head'
import styles from '../styles/contactus.module.css'
import Navbar from '../components/navbar';
const contactus = () => {
    return ( 
        <>
        <Head>
            <title>Empire Acedemy | Contact Us</title>
        </Head>

        <header className={styles.header}>
        <Navbar/>
        <div className={styles.pageTitle}>
            <h3 className={styles.title}>CONTACT US</h3>
        </div>
        
        </header>
        <div style={{
            // border:'red 2px solid',
            color:'white',
            background:'black',
            height:'800px',
            width:'1327px',
            borderRadius:'35px',
            padding:'60px 35px',
            margin:'0 0 20px 10px',
            
        }}>
         <p style={{
             margin:'0 0 0 840px'
         }}>Info
         <br/>
         () @empireacademy@gmail.com
         <br/>
         () +27 603 405463
         <br/>
         () 15 Church Street
         <br/>
         () 09:00 - 18:00
         
         </p>  
         <br/>
        <br/>
            
             Name
        <br/>
        <br/>
        <button
        style={{
            height:'40px',
            width:'400px'
        }} ></button> 
        <br/>
        <br/>
        Email
        <br/>
        <br/>
        <button
        style={{
            height:'40px',
            width:'400px'
        }}></button>
        <br/>
        <br/>
        Message
        <br/>
        <br/>
        <button
        style={{
            height:'40px',
            width:'400px'
        }}></button>
        <br/>
        <br/>
        <button style={{
            margin:'50px 0 0 150px',
            width:'80px',
            
        }}>Send
        </button>
        <br/>
        <br/>
        
        <h1 style={{
            margin:'0 0 0 310px'
        }}>Feel free to contact us at any time. We will get back to you as soon as we can !</h1>
        
        </div>
        
        
        </>
     );
}
 
export default contactus;