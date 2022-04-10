//FOR GRADY
import Head from 'next/head'
import styles from '../styles/registration.module.css'

const registrations = () => {
    return ( 
        <>
        <Head>
            <title>Empire Acedemy | Registrations</title>
        </Head>
        <div className={styles.main}>
            <h3>Registrations</h3>
        </div>
        </>
     );
}
 
export default registrations;