"use client"
import Footer from '../components/footer/Footer';
import NavBar from '../components/navbar/Navbar'
import styles from './rooms.module.css'

export default function Museum() {

    let currentImageIndex = 0;
    const images = ['/images/40.jpg', '/images/39.jpg', '/images/46.jpg'];

    
    function changeBackground(roomId:string, direction:number) {
        const room = document.getElementById(roomId);
        if (room != null) {
            currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
            room.style.opacity = '0.5';
            setTimeout(() => {
                room.style.backgroundImage = `url('${images[currentImageIndex]}')`;
                room.style.opacity = '1';
            }, 200);
        }
    }

  return (
    <div>
        <NavBar />

        <div className={styles.background}>
            <h1>Rooms</h1>
        </div>

        <div className={styles.secondDiv}>

            <div className={styles.infoWrapper}>
                <div className={styles.contactsDiv}>
                    <h1>Contacts</h1>
                    <ul>
                        <li>961324529</li>
                        <li>feelalentejoalandroal@hotmail.com</li>
                    </ul>
                </div>
            </div>

            <div className={styles.infoWrapper}>
                <div className={styles.layoutDiv}>
                    <h1>History</h1>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className={styles.imagesWrapper}>
                    <div className={`${styles.vimage} ${styles.vimage1}`}/>
                    <div className={`${styles.vimage} ${styles.vimage2}`}/>
                </div>
            </div>

            <div className={styles.infoWrapper}>
                    <div className={styles.imageTextWrapper}>
                        <div className={styles.exhibition}>
                            <h1>Amenities</h1>
                            <br/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <br/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <br/>
                        </div>
                        <div className={`${styles.room} ${styles.room0}`}/>
                    </div>
                    <div className={styles.secondBackground} />
                </div>

                <div className={styles.infoWrapper}>
                    <div className={styles.text}>
                        <h1>Room</h1>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div id="room1" className={`${styles.room} ${styles.room1}`}>
                        <button onClick={() => changeBackground('room1', -1)} className={styles.arrowButton}>←</button>
                        <button onClick={() => changeBackground('room1', 1)} className={styles.arrowButton}>→</button>
                    </div>
                </div>

                <div className={styles.infoWrapper}>
                    <div className={`${styles.room} ${styles.room2}`}/>
                    <div className={styles.text}>
                        <h1>Room</h1>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>

                <div className={styles.infoWrapper}>
                    <div className={styles.text}>
                        <h1>Room</h1>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className={`${styles.room} ${styles.room3}`}/>
                </div>

        </div>

        <div className={styles.endBackground}>
            <Footer/>
        </div>

    </div>
  );
}
