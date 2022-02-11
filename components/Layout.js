import Head from 'next/head';
import Footer from './Footer';
import Header from './Header'

export default function Layout({ children }) {
    return(
        <>
        <Head>
            <title>W20</title>
            <link rel="icon" href="/g20-logo.png" />
        </Head>
        <Header/>
            {children}
        <Footer></Footer>
        </>
    )
}