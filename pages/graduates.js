import Head from "next/head";
import styles from "../styles/graduates.module.css";
import Navbar from "../components/navbar";
import Link from "next/link";

const graduates = () => {
  return (
    <>
      <Head>
        <title>Empire Acedemy | Graduates</title>
      </Head>
      <header className={styles.header}>
        <Navbar />
        <div className={styles.pageTitle}>
          <h3 className={styles.title}>GRADUATES</h3>
        </div>
      </header>

      <div
        style={{
          height: "500px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          background:"lightgrey"
        }}
      >
        <p style={{ fontSize: "50px", marginLeft: "20px" }}>LEARN ABOUT OUR</p>
        <p style={{ fontSize: "50px" }}>GRADUATE'S STORIES </p>
        <button
          style={{
            fontSize: "14px",
            border: "none",
            backgroundColor: "#00093c",
            color: "white",
            width: "220px",
            height: "50px",
            borderRadius: "50px",
            cursor: "pointer",
            // marginLeft: "120px",
            marginTop: 30,
            fontWeight: 400,
            padding: "0 17px",
          }}
        >
          BECOME ONE OF THEM
        </button>
      </div>

      <div
        style={{
          backgroundColor: "white",
          fontSize: "20px",
          paddingTop: 40,
          flexDirection: "column",
        }}
      >
            
        <h1 style={{ textAlign: "center", color: "#4a42ec",fontSize:"50px"}}>GRADUATE STORIES</h1>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div>
            <img src="pic-1.png" style={{ marginTop:"150px",width:"300px" , borderTopRightRadius:"10px",  borderTopLeftRadius:"10px", borderBottomRightRadius:"10px",  borderBottomLeftRadius:"10px", boxShadow:" 0 3rem 3rem rgba(0, 0, 0, 0.3)"}} />
          </div>
          <div style={{ marginLeft: "5px", marginTop:"150px" }}>
            <h1 style={{ marginTop: 10 ,  color: "#4a42ec",}}>Pavel Pšečuk</h1>
            <br />
            <p style={{ marginBottom: 10 , color: "#4a42ec" }}>DevOps Engineer</p>
            <p
              style={{
                width: "600px",
                fontSize: 12,
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "lighter",
                lineHeight: 1.8,
                
              }}
            >
              I got interested in programming courses when I returned from a
              vacation in Canada, where everyone asked me what my job was and
              whether I was happy. The answer was no. So, I started looking for
              courses and found the SDA. The course syllabus is very
              comprehensive, not just about Java. It’s an excellent place to
              start learning. The course helped me to build a knowledge base
              that I would build further according to the job or project
              requirements that I’m working on. Those who are thinking of
              starting programming should have the time to invest in the
              learning process. All SDA trainers are very well trained and will
              be there to help you throughout the course. But this job involves
              a constant learning process, so you also need to learn how to
              expand your knowledge.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "70px",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div style={{ marginLeft: "40px", marginTop:"100px" }}>
            <h1 style={{ marginTop: 10, color: "#4a42ec", }}>Adina Dumitrescu</h1>
            <br />
            <p style={{ marginBottom: 10 , color: "#4a42ec" }}>Software Developer</p>
            <p
              style={{
                width: "600px",
                fontSize: 12,
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "lighter",
                lineHeight: 1.8,
              }}
            >
              I learned some programming basics in high school, but at that
              time, I considered it too difficult for me. After 12 years, I saw
              how fast the tech industry was growing and decided to give it a
              second shot and become part of this amazing world of the future. I
              decided to start the SDA course out of curiosity. The Java course
              seemed to be the most complete and detailed course on the market
              at that time, so I decided to give it a chance. My previous career
              was in Manufacturing Engineering, and we started implementing new
              technologies (Industry 4.0 direction). I saw how many benefits
              software automation and production assistance could bring to the
              manufacturing process and other industries. I was fascinated with
              it and wanted to understand it all better. The instructors and
              colleagues play an essential role in this transition. It’s about
              advice, support, and sharing one’s professional experience. I work
              more on the operational side, but the mindset, databases, and
              configuring jobs helped me greatly.
            </p>
          </div>
          <div>
            <img src="pic-2.png" style={{marginTop:"110px",width:"300px" , borderTopRightRadius:"10px",  borderTopLeftRadius:"10px", borderBottomRightRadius:"10px",  borderBottomLeftRadius:"10px", boxShadow:" 0 3rem 3rem rgba(0, 0, 0, 0.3)"}} />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop:"70px"
          }}
        >
          <div>
            <img src="pic-5.png" style={{marginTop:"110px",width:"300px" , borderTopRightRadius:"10px",  borderTopLeftRadius:"10px", borderBottomRightRadius:"10px",  borderBottomLeftRadius:"10px", boxShadow:" 0 3rem 3rem rgba(0, 0, 0, 0.3)"}}/>
          </div>
          <div style={{ marginLeft: "40px",marginTop:"130px"  }}>
            <h1 style={{ marginTop: 10 , color: "#4a42ec",}}>Gabor Gyarmati</h1>
            <br />
            <p style={{ marginBottom: 10  , color: "#4a42ec"}}>DevOps Engineer</p>
            <p
              style={{
                width: "600px",
                fontSize: 12,
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "lighter",
                lineHeight: 1.8,
              }}
            >
              I entered the IT market in 2009 by accident when playing games – a
              random head admin invited me to join their management team and a
              few months later, I inherited all his responsibilities. Two years
              later, it became one of the largest gaming projects in Lithuania.
              I gained a lot of technical and non-technical knowledge. It was my
              first solid IT experience. Unfortunately, I had to close it in
              2015 due to the lack of free time. Before taking the SDA course, I
              worked as Service Desk Specialist (1st level) for four years and
              tried to get promoted to management positions (like Team Lead or
              Manager). Still, unfortunately, I was rejected all four times I
              applied. I then decided to leave this company and move to another
              direction – a more technical one.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "70px",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div style={{ marginLeft: "40px", marginTop:"150px" }}>
            <h1 style={{ marginTop: 10 , color: "#4a42ec",}}>Ada Palacean (Mican)</h1>
            <br />
            <p style={{ marginBottom: 10 , color: "#4a42ec"}}>Software Developer</p>
            <p
              style={{
                width: "600px",
                fontSize: 12,
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "lighter",
                lineHeight: 1.8,
              }}
            >
              After a number of unsuccessful online Java/JavaScript courses, I
              saw a Facebook advertisement for the SDA course and thought that
              this is what I wanted to do. I wanted real teachers in a real
              classroom, with the option of asking questions straight away. The
              introduction meeting that described the program was impressive for
              me as well. The biggest advantage I got from attending the SDA
              course was that I understood software development and how its
              details relate to the larger parts. It’s not only about coding in
              Java; I received a package of different tools and processes used
              by development teams like Scrum, Bitbucket, server background,
              frontend development, etc. I recently got a better job, which I
              guess was also the result of taking the class and gaining new
              knowledge. At my current position, I don’t deal with Java code
              just yet, but there’s an opportunity to change my position
              internally to a software developer, which is my personal goal.
              Overall, I use ~60-70% of the knowledge I have learned at SDA,
              which is quite a lot, I guess.
            </p>
          </div>
          <div>
            <img src="pic-6.png" style={{marginTop:"110px",width:"300px" , borderTopRightRadius:"10px",  borderTopLeftRadius:"10px", borderBottomRightRadius:"10px",  borderBottomLeftRadius:"10px", boxShadow:" 0 3rem 3rem rgba(0, 0, 0, 0.3)"}} />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop:"70px"
          }}
        >
          <div>
            <img src="pic-4.png" style={{marginTop:"110px",width:"300px", borderTopRightRadius:"10px",  borderTopLeftRadius:"10px", borderBottomRightRadius:"10px",  borderBottomLeftRadius:"10px", boxShadow:" 0 3rem 3rem rgba(0, 0, 0, 0.3)"}} />
          </div>
          <div style={{ marginLeft: "40px" }}>
            <h1 style={{ marginTop: 10 , color: "#4a42ec",}}>Jasmine Beaumont</h1>
            <br />
            <p style={{ marginBottom: 30, color: "#4a42ec" }}>Architecture</p>
            <p
              style={{
                width: "700px",
                fontSize: 12,
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "lighter",
                lineHeight: 1.8,
              }}
            >
              My story is pretty funny, actually. I’ve always liked techy things
              and enjoyed informatics classes in high school, but I never
              considered myself a potential programmer. I guess that was because
              a stereotype of a nerdy guy surrounded the job. Fast forward a
              couple of years and I watched a great TV show Mr. Robot, and the
              timing couldn’t be better. I had just recently quit my previous
              career and was trying to figure out what to do next. So I decided
              that I wanted to become a hacker. But coming down to earth, with a
              little encouragement from my family, I decided to start learning
              to program and to try developing a career in the IT industry. I
              saw the SDA informative meeting pop-up and decided to go. I loved
              the meeting. It was really fun and convincing, so I signed the
              contract right away. Best decision ever! The course introduced me
              to the programming world. It had a lot of useful practice and
              theory, sometimes too much! But later on, when I started working,
              the topics slowly came together and started making a lot more
              sense.
            </p>
          </div>
        </div>
      </div>

      <div style={{ fontSize: "20px", flexDirection: "column", width: "100%", background:"lightgrey", paddingTop:"40px" }}>
        <h1
          style={{
            marginLeft: "50px",
            marginTop: 70,
            marginBottom: 90,
            textAlign: "center",
            color: "#4a42ec",
            fontSize:"50px"
          }}
        >
          BEST STUDENTS PROJECT'S
        </h1>
        <div
          style={{
            flexDirection: "column",
            marginLeft: "50px",
            marginTop: "30px",
            marginBottom:"30px"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div>
              <img src="applicationpic.webp" style={{ width:"70%" ,boxShadow:" 0 3rem 3rem rgba(0, 0, 0, 0.3)"}} />
            </div>
            <div style={{ marginLeft: "40px" }}>
              <h1 style={{ marginTop: 10,  color: "#4a42ec", }}>The New You Web</h1>
              <br />
              <h1 style={{ marginBottom: 30 , color: "#4a42ec",}}>Application</h1>
              <p
                style={{
                  width: "600px",
                  fontSize: 16,
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontWeight: "lighter",
                  lineHeight: 1.8,
                }}
              >
                The goal of this project was to develop an online fitness
                application that would engage coaches and motivate people around
                to lead a healthy lifestyle. The web application includes
                features such as nutrition plans, workout tips, a video library
                of tutorials, and a cozy chat to keep in touch. Moreover, the
                app allows users to participate in challenges to achieve optimal
                weight and build strength. It provides users with a mandatory
                daily training and nutrition plan, together with all the
                necessary tips and tricks.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "70px",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div style={{ marginLeft: "40px" }}>
              <h1 style={{ marginTop: 10, color: "#4a42ec", }}>Taxipy</h1>
              <br />
              <h1 style={{ marginBottom: 30 , color: "#4a42ec",}}>Application</h1>
              <p
                style={{
                  width: "600px",
                  fontSize: 16,
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontWeight: "lighter",
                  lineHeight: 1.8,
                }}
              >
                The goal of this project was to develop an online fitness
                application that would engage coaches and motivate people around
                to lead a healthy lifestyle. The web application includes
                features such as nutrition plans, workout tips, a video library
                of tutorials, and a cozy chat to keep in touch. Moreover, the
                app allows users to participate in challenges to achieve optimal
                weight and build strength. It provides users with a mandatory
                daily training and nutrition plan, together with all the
                necessary tips and tricks.
              </p>
            </div>
            <div>
              <img src="taxipy.webp" style={{ width:"70%" ,boxShadow:" 0 3rem 3rem rgba(0, 0, 0, 0.3)"}}/>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "70px",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div>
              <img src="applicationpic.webp" style={{ width:"70%", boxShadow:" 0 3rem 3rem rgba(0, 0, 0, 0.3)" }} />
            </div>
            <div style={{ marginLeft: "40px" }}>
              <h1 style={{ marginTop: 10, color: "#4a42ec", }}>NSC Business</h1>
              <br />
              <h1 style={{ marginBottom: 30, color: "#4a42ec", }}>Application</h1>
              <p
                style={{
                  width: "600px",
                  fontSize: 16,
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontWeight: "lighter",
                  lineHeight: 1.8,
                }}
              >
                The goal of this project was to develop an online fitness
                application that would engage coaches and motivate people around
                to lead a healthy lifestyle. The web application includes
                features such as nutrition plans, workout tips, a video library
                of tutorials, and a cozy chat to keep in touch. Moreover, the
                app allows users to participate in challenges to achieve optimal
                weight and build strength. It provides users with a mandatory
                daily training and nutrition plan, together with all the
                necessary tips and tricks.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "70px",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div style={{ marginLeft: "40px" }}>
              <h1 style={{ marginTop: 10, color: "#4a42ec", }}>Salon</h1>
              <br />
              <h1 style={{ marginBottom: 30 , color: "#4a42ec",}}>Application</h1>
              <p
                style={{
                  width: "600px",
                  fontSize: 16,
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontWeight: "lighter",
                  lineHeight: 1.8,
                }}
              >
                The goal of this project was to develop an online fitness
                application that would engage coaches and motivate people around
                to lead a healthy lifestyle. The web application includes
                features such as nutrition plans, workout tips, a video library
                of tutorials, and a cozy chat to keep in touch. Moreover, the
                app allows users to participate in challenges to achieve optimal
                weight and build strength. It provides users with a mandatory
                daily training and nutrition plan, together with all the
                necessary tips and tricks.
              </p>
            </div>
            <div>
              <img src="taxipy.webp" style={{ width:"70%", boxShadow:" 0 3rem 3rem rgba(0, 0, 0, 0.3)" }}/>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#fff",
          height: "500px",
          marginTop: 20,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "50px", marginLeft: "20px" }}>
          Change your life and start a new career with
        </p>
        <p style={{ fontSize: "50px" }}>our help.</p>

        <Link href="/courses">
          <button
            style={{
              fontSize: "14px",
              border: "none",
              backgroundColor: "#00093c",
              color: "white",
              width: "300px",
              height: "50px",
              borderRadius: "50px",
              cursor: "pointer",
              marginTop: 30,
              fontWeight: 400,
              width: "220px",
              padding: "0 17px",
            }}
          >
            Choose your course
          </button>
        </Link>
      </div>
    </>
  );
};

export default graduates;
