import reactDom from "react-dom";
import Slide from "./swiperCamp";
import Link from 'next/link'

//style variables
const blueGradient = 'rgb(5, 11, 130), rgb(4,9,30)' 


const Whychoose = () => {
  return (
    <>
    {/* section 1 */}
    <div style={{display:'flex',alignItems:'center',margin:'60px 20px 10px 40px'}}>
      <h1
            style={{
              color: "black",
              fontSize: "40px",
              marginRight:'20px'
            }}
            
      >
            WELCOME TO EMPIRE ACADEMY
      </h1>
      

        <div style={{width:'30px',height:"30px",border:`6px solid rgb(10,10,180)`, borderRadius:'40%'}}>
            
        </div>
            
      </div>
          
      <div style={{ display: "flex",alignItems:'center', margin:'30px 40px',borderTop:'1px solid blue',padding:'20px 0px' }}>
        <div style={{width:'50%'}}>
          <div style={{width:'80%'}}>
            <img  style={{width:'100%',height:'100%'}} src="welcome.webp" alt="welcome image"  />
          </div>
        </div>
        <div style={{width:'50%'}}>
          <p style={{lineHeight:'1.5',marginBottom:"40px",textAlign:'center'}}>
            We believe in the aspiring leaders of tomorrow looking to branch
            into international industries , as long as this is something they’re
            curious about. We created a solid setup where our instructors share
            knowledge and experience gained through years of working all around
            the world, providing you with guidance in finding a job after the
            courses we have to offer. We helped thousands of people get upskill
            and prepare them for the vast industries all around the world.
            become part of our family! Make it happen!
          </p>
          <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
          <Link href="/about">
            <button  style={{
              background:`linear-gradient(to right,${blueGradient})`,
              color:'white',borderStyle:'none',padding:'14px',fontWeight:'100',
              fontSize:'16px'

          }}>
              Read More About Us
            </button>
          </Link>
          </div>
          
        </div>
      </div>
          {/* Section 2 */}
      <div>

      <div  style={{background:'linear-gradient(to right, rgb(20,20,100),rgb(20,20,50))',color:'white'}}>
        <div style={{display:'flex',alignItems:'center',padding:'60px 20px 10px 40px'}}>
        <h1
        style={{
            color: "white",
            fontSize: "40px",
            marginRight:'20px'
          }}
        >
          WHY CHOOSE EMPIRE ACADEMY?
        </h1>
        <div style={{width:'30px',height:"30px",border:`6px solid rgb(10,10,180)`, borderRadius:'40%'}}>
        

        </div>
      </div>


      <div style={{display:'flex',alignItems:'center',margin:'30px 40px',borderTop:'1px solid blue',padding:'20px 0px'}}>

          <div style={{width:'50%'}}>
            <div style={{width:'80%'}}>
              <img src="grad.jpg" style={{ width: "100%"}}/>
            </div>
          </div>
          <div style={{width:'50%',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <p style={{lineHeight:'1.5',marginBottom:"40px",textAlign:'center'}}>
              We believe in the aspiring leaders of tomorrow looking to branch into
              international industries , as long as this is something they’re
              curious about. We created a solid setup where our instructors share
              knowledge and experience gained through years of working all around
              the world, providing you with guidance in finding a job after the
              courses we have to offer. We helped thousands of people get upskill
              and prepare them for the vast industries all around the world. become
              part of our family! Make IT happen!
            </p>
            <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
          <Link href="/registration">
            <button  style={{
              background:`linear-gradient(to right,${blueGradient})`,
              color:'white',borderStyle:'none',padding:'14px',fontWeight:'100',
              fontSize:'16px'

          }}>
              Join Us
            </button>
          </Link>
          </div>
          

          </div>

        
          
        
      </div>
      
      
      <div
        style={{
          color: "black",
          letterSpacing: "2px",
          margin: "70px 0px",
          padding: "0 40px ",
          borderRadius: "20px",
          // width:"100%",
        }}
      >
        <h3 style={{ textAlign: "center", fontSize: "48px" }}>
          Read our Reviews{" "}
        </h3>
        <br/>
        <img
          style={{
            justifyContent: "center",
            padding: "20px 20px",
            margin: "0 0 0 0",
            width: "300px",
            height: "300px",
          }}
          src="proffessorwhite.jpg"
        />

        <p style={{ padding: "0 20px", width: "700px", fontWeight: "lighter" }}>
          We believe in the aspiring leaders of tomorrow looking to branch into
          international industries , as long as this is something they’re
          curious about. We created a solid setup where our instructors share
          knowledge and experience gained through years of working all around
          the world, providing you with guidance in finding a job after the
          courses we have to offer. We helped thousands of people get upskill
          and prepare them for the vast industries all around the world. become
          part of our family! Make IT happen!
        </p>

        <ul
          style={{
            listStyle: "none",
            display: "flex",
            marginLeft: "20px",
            marginTop: "20px",
          }}
        >
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </li>
        </ul>
        <h3
          style={{
            fontSize: "45px",
            margin: "65px 0 0 10px",
            fontWeight: "lighter",
          }}
        >
          GRADUATES SATISFACTION
        </h3>
        <br />

        <div style={{ display: "flex" }}>
          <div>
            <img
              style={{
                justifyContent: "center",
                padding: "20px 20px",
                margin: "0 0 0 0",
                width: "300px",
                height: "300px",
              }}
              src="student5.jpg"
            />

            <p
              style={{
                padding: "0 20px",
                width: "400px",
                fontWeight: "lighter",
              }}
            >
              We believe in the aspiring leaders of tomorrow looking to branch
              into international industries , as long as this is something
              they’re curious about. We created a solid setup where our
              instructors share knowledge and experience gained through years of
              working all around the world, providing you with guidance in
              finding a job after the courses we have to offer. We helped
              thousands of people get upskill and prepare them for the vast
              industries all around the world. become part of our family! Make
              IT happen!
            </p>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                marginLeft: "20px",
                marginTop: "20px",
              }}
            >
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-half"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                </svg>
              </li>
            </ul>
          </div>

          <div>
            <img
              style={{
                justifyContent: "center",
                padding: "20px 20px",
                margin: "0 0 0 0",
                width: "400px",
                height: "300px",
              }}
              src="student4.jpg"
            />

            <p
              style={{
                padding: "0 20px",
                width: "400px",
                fontWeight: "lighter",
              }}
            >
              We believe in the aspiring leaders of tomorrow looking to branch
              into international industries , as long as this is something
              they’re curious about. We created a solid setup where our
              instructors share knowledge and experience gained through years of
              working all around the world, providing you with guidance in
              finding a job after the courses we have to offer. We helped
              thousands of people get upskill and prepare them for the vast
              industries all around the world. become part of our family! Make
              IT happen!
            </p>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                marginLeft: "20px",
                marginTop: "20px",
              }}
            >
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-half"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                </svg>
              </li>
            </ul>
          </div>

          <div>
            <img
              style={{
                justifyContent: "center",
                padding: "20px 20px",
                margin: "0 0 0 0",
                width: "400px",
                height: "300px",
              }}
              src="student3.jpg"
            />

            <p
              style={{
                padding: "0 20px",
                width: "400px",
                fontWeight: "lighter",
              }}
            >
              We believe in the aspiring leaders of tomorrow looking to branch
              into international industries , as long as this is something
              they’re curious about. We created a solid setup where our
              instructors share knowledge and experience gained through years of
              working all around the world, providing you with guidance in
              finding a job after the courses we have to offer. We helped
              thousands of people get upskill and prepare them for the vast
              industries all around the world. become part of our family! Make
              IT happen!
            </p>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                marginLeft: "20px",
                marginTop: "20px",
              }}
            >
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-half"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                </svg>
              </li>
            </ul>
          </div>
        </div>

        <br />
      </div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
      </div>
      

    </>
      
  );
};

export default Whychoose;
