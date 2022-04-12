//FOR JOHN
import Head from 'next/head'
import styles from '../styles/courses.module.css'
import Navbar from '../components/navbar';
const courses = () => {
    return ( 
        <>
        <Head>
            <title>Empire Acedemy | Courses</title>
        </Head>
        <header className={styles.header}>
        <Navbar/>
        <div className={styles.pageTitle}>
            <h3 className={styles.title}>OUR COURSES</h3>
        </div>
        </header>

        </>
     );
}
 
export default courses;