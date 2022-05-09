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
            height:'50%',
            width:'100%',
            
            padding:'60px 35px',
            margin:'0px 0 20px 0px',
            
        }}>
         <p> 
         <img src=''/>
         </p> 

         <br/>
        <br/>
            <h1>Our Courses</h1>
            
            <div style={{
                background:'white',
                width:'100%',
                height:'100%',
                borderRadius:'35px',
                color:'black',
                textAlign:'center',
                marginBottom:'20px',
                margin:'-5px',
                justifyContent:'center'
            }}><div class="cardcontainer">
            <div style={{
                margin:'20px'
            }} class="card">
                <h4 class="heading">M U S I C</h4>

               <i class="fa-solid fa-copy"></i>
<div class="pblock">
               
</div>
                
            </div>

            <div class="card">
                <h4 class="heading">F A S H I O N</h4>

               <i class="fa-solid fa-cloud"></i>
<div class="pblock">
               
</div>               
               
            </div>

            <div style={{
                margin:'20px'}} class="card">
                <h4 class="heading">T R A D I N G</h4> 

                <i class="fa-solid fa-star"></i>
<div class="pblock"></div>               
               
               </div>
   
               <div class="card">
                   <h4 class="heading">I T</h4> 
   
                   <i class="fa-solid fa-star"></i>
   <div class="pblock"></div>               
               
               </div>
   
               <div style={{
                margin:'20px'}} class="card">
                   <h4 class="heading">E N T R E P R E N E U R S H I P</h4> 
   
                   <i class="fa-solid fa-star"></i>
   <div class="pblock"></div>               
               
               </div>
   
               <div  class="card">
                   <h4 class="heading">A R C H I T E C T U R E</h4> 
   
                   <i class="fa-solid fa-star"></i>
   <div class="pblock"></div>               
               
               </div>
   
               <div style={{
                margin:'20px'}} class="card">
                   <h4 class="heading">T H E O L O G Y</h4> 
   
                   <i class="fa-solid fa-star"></i>
   <div class="pblock"></div>               
               
               </div>
   
               <div class="card">
                   <h4 class="heading">G R A P H I C  D E S I G N</h4> 
   
                   <i class="fa-solid fa-star"></i>
   <div class="pblock">
    

    
            
</div>
                
                </div>
                </div></div><br/> <p style={{
                textAlign:'center',
                margin:'10px',
                width:'100%',
            }}>To explore our courses</p>
            <br/><button className='button' style={{
                height:'10%',
                borderRadius:'10px',
                margin:'10px 0 0 46.1%',
                width:'10%',
                border:'none',
                justifyContent:'center',
                marginBottom:'20px',
                color:'black'
            }}><p className='button' style={{
                textAlign:'center',
                width:'100%',
               
            }}>Click here</p>
            <img style={{
                    
                    margin:'0 0 0 -99.9%',
                    textAlign:'center',

            }} src='200.gif' alt=''/> 

            </button>

            
        <br/>
        <br/>
        <br/>
        <br/>
        
            Our Team
            <div style={{
                background:'black',
                width:'50%',
                height:'90%',
                borderRadius:'65px',
                color:'black',
                textAlign:'center',
                padding:'0px',
                
            }}><div class="cardcontainer">
            <div class="cardtwo" style={{
                height:'40px',
                margin:'10px',
                width:'50%'
                
            }}><p style={{
                color:'white',
                marginBottom:'10px'
            }}>John Mukhendi</p>
            <div class="cardcontainer"></div>
<p style={{display:'flexend',
margin:'10px 0 0 250%'}}>Director.
    </p>
                {/* <h1  class="heading">John Mukhendi<br/> Director </h1> */}
                <img className='img' style={{
                    height:'250px',
                    width:'150%',
                    borderRadius:'5px',
                    margin:'0 0 0 -25%'
                }} src='IMG-20220215-WA0034.jpg' alt=''/>
                  
               

               <i class="fa-solid fa-copy"></i>
<div class="pblock">


               
</div>

                
            </div>
    
            <div class="cardcontainer"> 
            <div class="cardtwo" style={{
                height:'40px',
                margin:'10px',
                width:'50%'
                
            }}><p style={{
                color:'white',
                marginBottom:'10px'
            }}>Alarico Mandlate</p>
            <div class="cardcontainer"></div>
            <p style={{display:'flexend',
margin:'10px 0 0 275%'}}>Chairman.
    </p>
            
                     
                    
            <img className='img' style={{
                    height:'250px',
                    width:'150%',
                    borderRadius:'5px',
                    margin:'0 0 0 -25%'
                }}  src='IMG_9463.JPG' alt=''/>

            
            </div>
            
               <i class="fa-solid fa-cloud"></i>
<div class="pblock">
               
</div>               
               
            </div>

            
            <div class="cardcontainer"> 
            <div class="cardtwo" style={{
                height:'40px',
                margin:'10px',
                width:'50%'
                
            }}><p style={{
                color:'white',
                marginBottom:'10px'
            }}>Kisibu Grady</p>
            <div class="cardcontainer"></div>
            <p style={{display:'flexend',
margin:'10px 0 0 275%'}}>Proffessor.
    </p>

<img className='img' style={{
                    height:'250px',
                    width:'150%',
                    borderRadius:'5px',
                    margin:'0 0 0 -25%'
                }}  src='IMG-20211027-WA0060.jpg' alt=''/>

            
            </div>
            
                 

               <i class="fa-solid fa-cloud"></i>
<div class="pblock">
</div>
                
                </div>
                </div></div>
     
     

        <br/>
        <div style={{
                background:'black',
                width:'100%',
                height:'100px',
                borderRadius:'35px',
                color:'white',
                textAlign:'center',
                padding:'25px',
                margin:'120px 0 0px -6px',
                marginBottom:'20px'
            }}><p>Our Mission:</p><p >To Empower the leaders of tomorrow.</p></div>
            <br/>
            

            
       
        
       
        </div>
       

        </>
        
        </>
     );
}
 
export default about;