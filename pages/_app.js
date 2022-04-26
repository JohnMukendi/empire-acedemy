import Layout from '../components/layout'
import '../styles/globals.css'
// import {FaHeart} from 'react-icons/fa'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
       <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
