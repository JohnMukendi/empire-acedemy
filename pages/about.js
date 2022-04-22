//FOR RICO
import Head from 'next/head'
import styles from '../styles/about.module.css'
import Navbar from '../components/navbar';
const about = () => {
    return ( 
        <>
        <Head>
            <title>Empire Acedemy | About Us</title>
        </Head>
        <header className={styles.header}>
        <Navbar/>
        <div className={styles.pageTitle}>
            <h3 className={styles.title}>ABOUT US</h3>
        </div>
        </header>
        
        <h1 style={{
            textAlign:'center',
            fontSize:'25px',
            
        }}></h1>
        <>
        
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
         <p> 
         <img src=''/>
         </p> 

         <br/>
        <br/>
            Our Courses
            
        <br/>
        <br/>
        
        <br/>
        <br/>
            The Mission

        <br/>
        <br/>
        
        <br/>
        <br/>
            Our Team
        
        <br/>
        <br/>
        
        <br/>
        <br/>
        
        <br/>
        
       
        </div>
       

        </>
        </>
     );
}
 
export default about;