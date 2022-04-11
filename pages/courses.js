//FOR JOHN
import Head from 'next/head'
import styles from '../styles/courses.module.css'
const courses = () => {
    return ( 
        <>
        <Head>
            <title>Empire Acedemy | Courses</title>
        </Head>
        <div className={styles.main}>
            <h3>Courses</h3>
            <div className={styles.coursesDiv}>
            <p className={styles.introInfo}>
                Here at <b>Empire Acedemy</b> we provide you with the best tools for ensuring
                that you achieve succuess with our range of <b>Courses</b>that all make it to
                the list of <b>most important jobs</b>in the world
            </p>
            </div>
        </div>
        </>
     );
}
 
export default courses;