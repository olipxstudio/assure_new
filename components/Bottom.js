import styles from '../styles/bottom.module.css'

export default function Bottom(){
    return (
        <div className={styles.hero}>
            <div className='container'>
                {/* <h1 className={`${styles.hero_h1} ${styles.best}`}>THE BEST</h1> */}
                <h1 className={styles.hero_h1}>IT&apos;S EASY <span className={styles.hero_span}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip.</span></h1>
                <h1 className={`${styles.hero_h1}  ${styles.agency}`}>TO GET STARTED</h1>
            </div>
            
            <a href='#' className='button'>Contact Us</a>
        </div>
    )
}
