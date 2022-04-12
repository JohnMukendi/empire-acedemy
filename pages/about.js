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
        </>
     );
}
 
export default about;