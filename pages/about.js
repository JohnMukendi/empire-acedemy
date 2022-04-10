//FOR RICO
import Head from 'next/head'
import styles from '../styles/about.module.css'
const about = () => {
    return ( 
        <>
        <Head>
            <title>Empire Acedemy | About Us</title>
        </Head>
        <div className={styles.main}>
            <h3>About Us</h3>
        </div>
        </>
     );
}
 
export default about;