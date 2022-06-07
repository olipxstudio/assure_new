import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import Bottom from '../components/Bottom'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

export default function Contact() {
    
    return (
        <div className={styles.container}>
            <Head>
                <title>Contact Us | Assure Business & Communication</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/Assure-Biz-icon.png" />
            </Head>
            
            <main className={styles.main}>
                <Nav />
                
                <div className='banners'>
                    <h1>Contact Us</h1>
                </div>
                
                
                
            </main>
            
            <Footer />
        </div>
    )
}
