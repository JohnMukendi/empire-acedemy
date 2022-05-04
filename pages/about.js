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
            background: "linear-gradient(to right, #00093c,#2d0b00)",
            // height:'1600px',
            // width:'100%',
            // borderRadius:'35px',
            padding:'60px 35px',
            margin:'30px 0px 20px 0px',
            // textAlign:"center"
        }}>
         {/* <p> 
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
        </button> */}
        
        
        <br/>
        <br/>
        <h1 style={{textAlign:"center"}}>
            The Mission
        </h1>
            
        <p style={
        {
        textAlign:"center",
          
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
      }>To empower the Leaders of tommorow!</p>
        <br/>
        
        <div>
            <h1 style={{textAlign:"center"}}>Our Team</h1>
        </div>



            <div style={{display:"flex", justifyContent:"space-between", marginTop:"40px"}}>
        <div style={
            {
                height:'400px',
               
                marginBottom:'60px',
              
                width:"400px",
               
            }
        } className='card'><img style={{
            height:'300px',
            width:'300px'
        }} src="/IMG-20220215-WA0034.jpg" /><br/>
       <h2  style={{marginLeft:"30px"}}> JOHN MUKENDI</h2>
         <p  style={{marginLeft:"60px"}}>DIRECTOR</p>
        </div>
        <div style={
            {
                height:'400px',
              
                marginBottom:'60px',
              
                width:"400px",
                       
            }
        } className='card'><img style={{
            height:'300px',
            width:'300px'
        }} src="/IMG_9465 08.29.36.JPG" /><br/>
       <h2 style={{marginLeft:"30px"}} > ALARICO MANDLATE</h2>
        <p style={{marginLeft:"90px"}}>CHAIRMAN</p>
        </div>


        <div style={
            {
                height:'300px',
                marginBottom:'60px',
                width:"400px",
                borderRadius:"30px"
            }
        } className='card'><img style={{
            height:'300px',
            width:"100%",
            color:"white",
            textAlign:"center"
        }} src="/IMG-20211027-WA0060.jpg" />
        <br/>
        <h2 style={{textAlign:"center"}}>KISIBU GRADY</h2>
        <p style={{textAlign:"center"}}>PROFESSOR</p>
        </div>
           </div>
      
        </div>
       

        </>
        </>
     );
}
 
export default about;