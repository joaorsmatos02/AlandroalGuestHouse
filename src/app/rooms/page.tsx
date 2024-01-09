import Link from 'next/link';
import Footer from '../components/footer/Footer';
import NavBar from '../components/navbar/Navbar'
import styles from './rooms.module.css'

export default function Museum() {
  return (
    <div>
        <NavBar />

        <div className={styles.background}>
            <h1>Rooms</h1>
        </div>

        <div className={styles.secondDiv}>

          <div className={styles.infoWrapper}>
              <div className={styles.historyDiv}>
                <h1>History</h1>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className={styles.contactsDiv}>
                <h1>Contacts</h1>
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
                    <div className={`${styles.room} ${styles.room0}`}/>
                </div>
                <div className={styles.backgroundWrapper}>
                    <div className={styles.secondBackground} />
                </div>
            </div>

            <div className={styles.infoWrapper}>
                <div className={`${styles.room} ${styles.room1}`}>
                    <h1>Red Room</h1>
                </div>
                <div className={`${styles.room} ${styles.room2}`}>
                    <h1>Blue Room</h1>
                </div>
            </div>

            <div className={styles.infoWrapper}>
                <div className={`${styles.room} ${styles.room3}`}>
                    <h1>Birds Room</h1>
                </div>
                <div className={`${styles.room} ${styles.room4}`}>
                    <h1>Golden Room</h1>
                </div>
            </div>

            <div className={styles.infoWrapper}>
                <div className={`${styles.room} ${styles.room5}`}>
                    <h1>Well Room</h1>
                </div>
                <div className={`${styles.room} ${styles.room6}`}>
                    <h1>Green Room</h1>
                </div>
            </div>

        </div>

        <div className={styles.endBackground}>
            <Footer/>
        </div>

    </div>
  );
}
