import Layout from '../components/layout'
import '../styles/globals.css'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
       <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
