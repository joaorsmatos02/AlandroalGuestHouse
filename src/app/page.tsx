import Link from 'next/link';
import Footer from '../app/components/footer/Footer';
import NavBar from '../app/components/navbar/Navbar'
import styles from './page.module.css'

export default function Museum() {
  return (
    <div>
        <NavBar />

        <div className={styles.background}>
            <h1>Alandroal Guest House</h1>
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
                <div className={styles.backgroundWrapper}>
                    <div className={styles.secondBackground} />
                </div>
                <div className={styles.roomInfo}>
                    <h1>Amenities</h1>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>

            <Link href="/museum">
                <div className={styles.museumDiv}>
                    <h1>See Our Museum</h1>
                </div>
            </Link>

            <div className={styles.line}>
                <Link href="/rooms">
                    <h1>Rooms</h1>
                </Link>
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
