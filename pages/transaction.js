//FOR GRADY
import Head from 'next/head'
import styles from '../styles/transaction.module.css'

const transaction = () => {
    return ( 
        <>
        <Head>
            <title>Empire Acedemy | Transactions</title>
        </Head>
        <div className={styles.main}>
            <h3>Transactions</h3>
        </div>
        </>
     );
}
 
export default transaction;