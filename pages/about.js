//FOR RICO
import Head from 'next/head'
import styles from '../styles/about.module.css'
import Navbar from '../components/navbar';
import Slide from "../components/swiperCamp";
import Link from 'next/link'
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
            height:'1600px',
            width:'1327px',
            borderRadius:'35px',
            padding:'60px 35px',
            margin:'0 0 20px 10px',
            textAlign:"center"
        }}>
         <p> 
         <img src=''/>
         </p> 

         <br/>
        <br/>
        <h1 style={
        {
          padding:"0 20px",
          textAlign:"center",
          fontSize:"45px",
          color:"black",
                fontSize:"20px",
                background:"white",
                letterSpacing:"2px",
                margin:"70px 0px",
                padding:"10px 165px ",
                borderRadius:"25px",
                width:"100%",
                height:"80px",
                textAlign:'center'
        }
      }><h1>Explore Our Cources:</h1>Music, IT, Architure, Graphic Design, Trading, Fashion, Entrepreneurship & THeology</h1>
        <button style={{
                textDecoration:'none',
                color:'black',
                textAlign:'center',
                width:'100px',
                height:'50px',
                borderRadius:'20px',
                border:'none'
            }}>
            <Link  href="./courses"><a style={{
                textDecoration:'none',
                color:'black',
                textAlign:'center',
                width:'40px',
                height:'40px',
                borderRadius:'4px'
            }}>Click here</a></Link>
        </button>
        
         
        
        <br/>
        <br/>
        
        <br/>
        <br/>
            The Mission
            
        <h1 style={
        {
        textAlign:"center",
          fontSize:"45px",
          color:"black",
          fontSize:"20px",
          padding:'10px 450px',
                background:"white",
                letterSpacing:"2px",               
                borderRadius:"20px",
                width:"100%",
                display:"flex",
                height:"80px",
                margin:'80px 0px'
               
        }
      }>To empower the Leaders of tommorow!</h1>
        <br/>
        
        
            Our Team
            <div className='cardcontainer'>
        <div style={
            {
                height:'400px',
                color:'black',
marginBottom:'60px'
            }
        } className='card'><img style={{
            height:'300px',
            width:'300px'
        }} src="/IMG-20220215-WA0034.jpg" /><br/>JOHN MUKENDI <p>Director</p><img></img></div>
        <div style={
            {
                height:'400px',
                color:'black',
 marginBottom:'60px'               
            }
        } className='card'><img style={{
            height:'300px',
            width:'300px'
        }} src="/IMG_9465 08.29.36.JPG" /><br/>ALARICO ROGERIO MANDLATE<p>Chairman</p> <img></img></div>
        <div style={
            {
                height:'400px',
                color:'black',
marginBottom:'60px'
            }
        } className='card'><img style={{
            height:'100px',
            weight:'100px',
            marginBottom:'218px'
        }} src="/IMG-20211027-WA0060.jpg" /><br/>KISIBU GRADY<p>Proffeser</p> </div>
           </div>
      
        </div>
       

        </>
        </>
     );
}
 
export default about;