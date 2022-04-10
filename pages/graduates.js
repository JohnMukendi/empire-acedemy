//FOR JOHN
import Head from 'next/head'
import styles from '../styles/graduates.module.css'
const graduates = () => {
    return ( 
        <>
        <Head>
            <title>Empire Acedemy | Graduates</title>
        </Head>
        <div className={styles.main}>
            <h3>Graduates</h3>
        </div>
        </>
     );
}
 
export default graduates;