//FOR RICO
import Head from 'next/head'
import styles from '../styles/contactus.module.css'
import Navbar from '../components/navbar';
const contactus = () => {
    return ( 
        <>
        <Head>
            <title>Empire Acedemy | Contact Us</title>
        </Head>

        <header className={styles.header}>
        <Navbar/>
        <div className={styles.pageTitle}>
            <h3 className={styles.title}>CONTACT US</h3>
        </div>
        </header>
        
        </>
     );
}
 
export default contactus;