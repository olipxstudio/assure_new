import { useState } from "react"
import styles from '../styles/home.module.css'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav(){
    const [display, setDisplay] = useState("none");
    const toggleNav = () => {
        display === 'none' ? setDisplay('block') : setDisplay('none');
    }
    return (
        <header className={`container`}>
            <Image src={"/Assure-Biz-logo-wh.png"} alt="" width={230} height={60} />
            <ul className={`${styles.txt_white} ${styles.flex} ${styles.justify}`} style={{display:display}}>
                <li><Link href="/" className="">Home</Link></li>
                <li><Link href="/about" className="">About Us</Link></li>
                <li><Link href="/services" className="">Services</Link></li>
                <li><Link href="/sla" className="">SLA</Link></li>
                <li><Link href="/leveragingtech" className="">Leveraging Technology</Link></li>
            </ul>
            <Button color="gradient" className='btn_btn' rounded auto>Contact Us</Button>
            <div className='toggle' onClick={toggleNav}>
                <span></span>
                <span></span>
            </div>
        </header>
    )
}
