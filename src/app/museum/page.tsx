import Footer from '../components/footer/Footer';
import NavBar from '../components/navbar/Navbar'
import styles from './museum.module.css'

export default function Home() {
  return (
    <div>
        <NavBar />

        <div className={styles.background}>
            <h1>Museum</h1>
        </div>

        <div className={styles.secondDiv}>

          <div className={styles.infoWrapper}>
              <div className={`${styles.photo} ${styles.photo5}`}/>
              <div className={styles.pricingDiv}>
                <h1>Pricing</h1>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
          </div>

          <div className={styles.infoWrapper}>
                <div className={styles.imageTextWrapper}>
                    <div className={styles.exhibition}>
                        <h1>Exhibition</h1>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <br/>
                    </div>
                    <div className={`${styles.photo} ${styles.photo6}`}/>
                </div>
                <div className={styles.backgroundWrapper}>
                    <div className={styles.secondBackground} />
                </div>
            </div>

            <div className={styles.infoWrapper}>
                <div className={`${styles.photo} ${styles.photo1}`}/>
                <div className={`${styles.photo} ${styles.photo2}`}/>
            </div>

            <div className={styles.infoWrapper}>
                <div className={`${styles.photo} ${styles.photo3}`}/>
                <div className={`${styles.photo} ${styles.photo4}`}/>
            </div>

        </div>

        <div className={styles.endBackground}>
            <Footer/>
        </div>

    </div>
  );
}
