import styles from '../styles/home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <div className='container'>
                <section className='footer_divide'>
                    <div>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link href='/about'>About Us</Link></li>
                            <li><Link href='/services'>Services</Link></li>
                            <li><Link href='/sla'>SLA</Link></li>
                            <li><Link href='/leveragingtech'>Leveraging Technology</Link></li>
                        </ul>
                    </div>
                    <div className='connects'>
                        <h4>Lets Connect</h4>
                        <div>
                            <a href=''>
                                <Image src={"/logo-facebook.svg"} alt="" width={25} height={25}/>
                            </a>
                            <a href=''>
                                <Image src={"/logo-twitter.svg"} alt="" width={25} height={25}/>
                            </a>
                            <a href=''>
                                <Image src={"/logo-instagram.svg"} alt="" width={25} height={25}/>
                            </a>
                        </div>
                    </div>
                </section>
                <section>
                    <p className='copyright'>© 2022 Assure Business & Communication (PTY) Ltd • All Rights Reserved. Design by Olipx Studio</p>
                </section>
            </div>
        </footer>
    )
}
