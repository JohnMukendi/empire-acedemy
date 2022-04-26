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
            background: "linear-gradient(to right, #00093c,#2d0b00)",
            // height:'800px',
            width:'100%',
            padding:'60px 35px',
            margin:'10px 0 20px 0px',
            
        }}>
         <div style={{
             margin:'0 0 0 840px'
         }}>
             
             <h3>CONTACT US:</h3>
         <br/>
         <p style={{fontWeight:"lighter"}}>@empireacademy@gmail.com</p>
         
         <p style={{fontWeight:"lighter"}}>+27 603 405463</p>
         
         <p style={{fontWeight:"lighter"}}>15 Church Street</p>
         
         <p style={{fontWeight:"lighter"}}>09:00 - 18:00</p>
         </div>  
         
            
        <div>
        <form style={{flexDirection:"column"}}>
              <input
                type="text"
                className={styles.inputField}
                placeholder="Name"
                required

                style={{width:"300px"}}
              />
              <br/>
               <input
                type="email"
                className={styles.inputField}
                placeholder="Email"
                required
                style={{width:"300px", marginTop:"30px"}}
              />
              <br/>
              <input
                type="text"
                className={styles.inputField}
                placeholder="Password"
                required
                style={{width:"300px", marginTop:"30px"}}
              ></input>
              <br/>
              <button type="submit" className={styles.submitBtn} style={{marginTop:"20px", width:"300px", color:"white",background:"black", border:"none",borderRadius:"50px", height:"50px"}}>SUBMIT</button>
            </form>
         

        </div>
        <br/>
        <br/>
        
        <p style={{
            margin:'0 0 0 310px'
        }}>Feel free to contact us at any time. We will get back to you as soon as we can !</p>
        
        </div>
        
        
        </>
     );
}
 
export default contactus;