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
        </div>
        </>
     );
}
 
export default courses;