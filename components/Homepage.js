
import styles from "../styles/Main.module.css";
import Link from 'next/link'


const Main = () => {
  
    return (

        <>

        {/* ====main==== */}

        <div className={styles.main}>
          <div style={{fontFamily:"sans-serif", textAlign:"center"}}>
            <h1 style={{color:"#4a42ec",fontSize:"60px"}}>Empire Academy</h1>
            <h5 style={{color:"#4a42ec",marginTop:"30px"}}>Trust Our Services</h5>
          </div>

          <div style={{fontFamily:"sans-serif",padding:' 0px 8%', textAlign:"center", color:"#20292f",marginTop:"20px"}}>
            <h1 style={{fontFamily:"sans-serif",textAlign:'center', color:"20292f",fontSize:"40px",marginTop:"50px"}}> E.M.A prides itself on the quality of its educational programmes.</h1>
            <p  style={{color:"#6D7C70",textAlign:"center",lineHeight:"30px",fontSize:"18px",marginTop:"50px"}}>E.M.A is our flagship theme and visual page builder. It's the most widely used premium WordPress theme in the world according to stats from BuiltWith.com. Divi is more than just a theme, it's a website building framework that makes it possible to design beautiful websites without ever touching a single line of code and without installing and configuring dozens of disjointed plugins. We think this is the future of WYSIWYG and it's unlike any WordPress theme you have ever used before.</p>
          </div>

          <div style={{textAlign:"center",marginTop:"70px",marginBottom:"50px"}}>
            <Link href="about"><button className={styles.buttonOne} style={{color:"#fff"}}>Learn more about Empire</button></Link>
          </div>

            <div style={{display:'flex',justifyContent:'end'}}>
              <div>
                <div style={{display:"flex",justifyContent:'center'}}>
                  <img src="lady1 (1).jpg" style={{width:"25%"}}/>
                  <img src="lady1 (2).jpg" style={{width:"25%"}}/>
                  <img src="lady1 (3).jpg" style={{width:"25%"}}/>
                </div>
                <div style={{display:"flex",justifyContent:'center'}}>
                  <img src="lady1 (4).jpg" style={{width:"25%"}}/>
                  <img src="lady1 (5).jpg" style={{width:"25%"}}/>
                  <img src="lady1 (6).jpg" style={{width:"25%"}}/>
                </div>
              </div>
              
            </div>
        </div>

        {/* ====headeer==== */}

        <div className={styles.header}>
          <div className={styles.headerContainer}>

             <div className={styles.headerLeft}>
               <h1>Grow your skills to to advance your career path</h1>
               <p>We believe in working together as a team to improve our skills for future jobs preparing ourselves for the work field </p>
               <Link href="courses"><button><a>GET STARTED</a></button></Link>
             </div>

             <div className={styles.headerRight}>
               <div className={styles.headerRightImage}>
                <img src="illustration1.png"/>
               </div>
             </div>
          </div>
        </div>

        {/* =====Categories===== */}

        <div className={styles.categories}>

          <div className={styles.categoriesContainer}>

            <div className={styles.categoriesLeft}>
              <h1 style={{fontSize:"55px", color:"#4a42ec"}}>Categories</h1>
              <p>We believe in E.M.A that every student has a chance to become something big in life with our great courses that are offered offered by the greatest lectures</p>
              <Link href="courses"><button style={{color:"white", background:"black", width:"140px", height:"50px", border:"none", cursor:"pointer"}}><a>CHOOSE COURSE</a></button></Link>
            </div>

            <div className={styles.categoriesRight}>
              <article className={styles.category}>
                <span className={styles.categoryIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pc-display" viewBox="0 0 16 16">
                  <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V1Zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5ZM1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2H1.5Z"/>
                </svg>
                </span>
                <h5>I.T</h5>
                <p>More than 50,000 students have pursued big carrers after studying here</p>
              </article>

              <article className={styles.category}>
                <span className={styles.categoryIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
                  <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
                </svg>
                </span> 
                <h5> Architectural Studies</h5>
                <p>One of the world leading farmers attained his degree here at Empire Academy and 100 more have aquired big jobs and skills</p>
              </article>

              <article className={styles.category}>
                <span className={styles.categoryIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-list" viewBox="0 0 16 16">
                  <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z"/>
                  <path fill-rule="evenodd" d="M12 3v10h-1V3h1z"/>
                  <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z"/>
                  <path fill-rule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/>
                </svg>
                </span>
                <h5>Music Studies</h5>   
                <p>Before Micheal Jackson became the King of Pop,he studied his music here</p>
              </article>

              <article className={styles.category}>
                <span className={styles.categoryIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-bitcoin" viewBox="0 0 16 16">
                  <path d="M5.5 13v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.5v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.084c1.992 0 3.416-1.033 3.416-2.82 0-1.502-1.007-2.323-2.186-2.44v-.088c.97-.242 1.683-.974 1.683-2.19C11.997 3.93 10.847 3 9.092 3H9V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.573V1.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25V3l-1.998.011a.25.25 0 0 0-.25.25v.989c0 .137.11.25.248.25l.755-.005a.75.75 0 0 1 .745.75v5.505a.75.75 0 0 1-.75.75l-.748.011a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25L5.5 13zm1.427-8.513h1.719c.906 0 1.438.498 1.438 1.312 0 .871-.575 1.362-1.877 1.362h-1.28V4.487zm0 4.051h1.84c1.137 0 1.756.58 1.756 1.524 0 .953-.626 1.45-2.158 1.45H6.927V8.539z"/>
                </svg>
                </span>
                <h5>Trading</h5>
                <p>Elon Musk and Jeff Bezos never just got rich through their companies,they had to study trading skills here</p>
              </article>

              <article className={styles.category}>
                <span className={styles.categoryIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-palette" viewBox="0 0 16 16">
                  <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                  <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>
                </svg>
                </span>
                <h5>Graphic Design</h5>
                <p>Luando from App World pursued his degree here and now he's one of the world's best designers</p>
              </article>

              <article className={styles.category}>
                <span className={styles.categoryIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
                  <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
                  <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
                  <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
                </svg>
                </span>
                <h5>Entrepreneurship </h5>
                <p>Alerico Rogerio studies here before he became an established entrepreneur and now he sells muffins at App World</p>
              </article>

              <article className={styles.category}>
                <span className={styles.categoryIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                </svg>
                </span>
                <h5>Fashion</h5>
                <p>Study Fashion here at Empire Academy and you'll have more drip than Chris Brown and Gunna</p>
              </article>

              <article className={styles.category}>
                <span className={styles.categoryIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book-half" viewBox="0 0 16 16">
                  <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                </svg>
                </span>
                <h5>Theology</h5>
                <p>Dersio pursued a degree here and now he has an open mind and views the world in extreme scrutiny</p>
              </article>
            </div>
          </div>
        </div>

        {/* ====courses==== */}
        <div className={styles.courses}>
          <h2 style={{textAlign:"center", fontSize:"50px", color:"#4a42ec", paddingTop:"80px"}}>Our Popular courses</h2>
          <div className={styles.coursesContainer}>

            <article className={styles.course}>
            <div className={styles.courseImage}>
            <img src="ui3.jpg" />
            </div>
           <div className={styles.courseInfo}>
           <h4>Responsive Social Media website UI Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, nisi</p>
            <Link href="courses"><button style={{color:"white", background:"black", width:"140px", height:"50px", border:"none", cursor:"pointer"}}><a>CHOOSE COURSE</a></button></Link>
           </div>
            </article>

            <article className={styles.course}>
            <div className={styles.courseImage}>
            <img src="ui3.jpg" />
            </div>
            <div className={styles.courseInfo}>
           <h4>Responsive Social Media website UI Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, nisi</p>
            <Link href="courses"><button style={{color:"white", background:"black", width:"140px", height:"50px", border:"none", cursor:"pointer"}}><a>CHOOSE COURSE</a></button></Link>
           </div>
            </article>

            <article className={styles.course}>
            <div className={styles.courseImage}>
            <img src="ui3.jpg" />
            </div>
            <div className={styles.courseInfo}>
             <h4>Responsive Social Media website UI Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ab, nisi</p>
            <Link href="courses"><button style={{color:"white", background:"black", width:"140px", height:"50px", border:"none", cursor:"pointer"}}><a>CHOOSE COURSE</a></button></Link>
            </div>
            </article>
          </div>
        </div>

        </>
    );
}
 
export default Main;

