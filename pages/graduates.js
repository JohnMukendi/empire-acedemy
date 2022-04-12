//FOR JOHN
import Head from 'next/head'
import styles from '../styles/graduates.module.css'
import Navbar from '../components/navbar';
const graduates = () => {
    return ( 
        <>
        <Head>
            <title>Empire Acedemy | Graduates</title>
        </Head>
        <header className={styles.header}>
        <Navbar/>
        <div className={styles.pageTitle}>
            <h3 className={styles.title}>GRADUATES</h3>
        </div>
        </header>

        </>
     );
}
 
export default graduates;