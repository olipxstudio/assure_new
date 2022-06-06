import styles from '../styles/hero.module.css'

export default function Hero(){
    return (
        <div className={styles.hero}>
            <div className='container'>
                <h1 className={`${styles.hero_h1} ${styles.best}`}>THE BEST</h1>
                <h1 className={styles.hero_h1}>S<span className={styles.ooo}></span>FTWARE <span className={styles.hero_span}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip.</span></h1>
                <h1 className={`${styles.hero_h1}  ${styles.agency}`}>AGENCY</h1>
                
                <span className={`${styles.decor}  ${styles.round}`}></span>
                <span className={`${styles.decor}  ${styles.square}`}></span>
            </div>
        </div>
    )
}
