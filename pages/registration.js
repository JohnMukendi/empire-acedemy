//FOR GRADY
import Head from 'next/head'
import styles from '../styles/registration.module.css'
import Navbar from '../components/navbar';

const registrations = () => {
    return ( 
        <>
        <Head>
            <title>Empire Acedemy | Registrations</title>
        </Head>
        <header className={styles.header}>
        <Navbar/>
        <div className={styles.pageTitle}>
            <h3 className={styles.title}>REGISTRATION</h3>
        </div>
        </header>
        
        
        </>
     );
}
 
export default registrations;