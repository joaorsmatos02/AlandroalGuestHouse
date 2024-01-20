"use client"
import { useState } from 'react';
import Footer from '../components/footer/Footer';
import NavBar from '../components/navbar/Navbar'
import styles from './rooms.module.css'

export default function Museum() {

    interface ImagesPerRoom {
        [roomId: string]: string[];
      }

    const imagesPerRoom : ImagesPerRoom = {
        room1: ['/images/01_Pomba/01.jpg', '/images/01_Pomba/03.jpg', '/images/01_Pomba/05.jpg', '/images/01_Pomba/07.jpg', '/images/01_Pomba/09.jpg'],
        room2: ['/images/02_Hollywood/11.jpg', '/images/02_Hollywood/12.jpg', '/images/02_Hollywood/14.jpg', '/images/02_Hollywood/15.jpg', '/images/02_Hollywood/16.jpg'],
        room3: ['/images/03_Blue/20.jpg'],
        room4: ['/images/04_Dourado/25.jpg'],
        room5: ['/images/05_Rosa/31.jpg'],
        room6: ['/images/06_Vermelho/38.jpg'],
        room7: ['/images/07_Verde/46.jpg'],
        room8: ['/images/08_Espelhos/53.jpg'],
        room9: ['/images/09_Xana/61.jpg'],
        room10: ['/images/10_Xana Casal/72.jpg'],
        room11: ['/images/11_Gessos/76.jpg'],
        room12: ['/images/12_Passarinhos/84.jpg'],
        room13: ['/images/13_poço/90.jpg'],
        room14: ['/images/14_Apartamento/121.jpg']
    };

    type CurrentImageIndex = {
        [roomId: string]: number;
    };

    const [currentImageIndex, setCurrentImageIndex] = useState<CurrentImageIndex>({});

    function changeBackground(roomId:string, direction:number) {
        const roomImages = imagesPerRoom[roomId];
        const currentIndex = currentImageIndex[roomId] || 0;

        const room = document.getElementById(roomId);

        if (room != null) {
            const newIndex = (currentIndex + direction + roomImages.length) % roomImages.length;

            setCurrentImageIndex((prevIndex) => ({ ...prevIndex, [roomId]: newIndex }));

            room.style.opacity = '0.5';

            setTimeout(() => {
            room.style.backgroundImage = `url('${roomImages[newIndex]}')`;
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
                        <h1>Pomba</h1>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div id="room1" className={`${styles.room} ${styles.room1}`}>
                        <button onClick={() => changeBackground('room1', -1)} className={styles.arrowButton}>←</button>
                        <button onClick={() => changeBackground('room1', 1)} className={styles.arrowButton}>→</button>
                    </div>
                </div>

                <div className={styles.infoWrapper}>
                    <div id="room2" className={`${styles.room} ${styles.room2}`}>
                        <button onClick={() => changeBackground('room2', -1)} className={styles.arrowButton}>←</button>
                        <button onClick={() => changeBackground('room2', 1)} className={styles.arrowButton}>→</button>
                    </div>
                    <div className={styles.text}>
                        <h1>Hollywood</h1>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>

                <div className={styles.infoWrapper}>
                    <div className={styles.text}>
                        <h1>Blue</h1>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div id="room3" className={`${styles.room} ${styles.room3}`}>
                        <button onClick={() => changeBackground('room3', -1)} className={styles.arrowButton}>←</button>
                        <button onClick={() => changeBackground('room3', 1)} className={styles.arrowButton}>→</button>
                    </div>
                </div>

                <div className={styles.infoWrapper}>
                    <div id="room4" className={`${styles.room} ${styles.room4}`}>
                        <button onClick={() => changeBackground('room4', -1)} className={styles.arrowButton}>←</button>
                        <button onClick={() => changeBackground('room4', 1)} className={styles.arrowButton}>→</button>
                    </div>
                    <div className={styles.text}>
                        <h1>Dourado</h1>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>

                <div className={styles.infoWrapper}>
                    <div className={styles.text}>
                        <h1>Rosa</h1>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div id="room5" className={`${styles.room} ${styles.room5}`}>
                        <button onClick={() => changeBackground('room5', -1)} className={styles.arrowButton}>←</button>
                        <button onClick={() => changeBackground('room5', 1)} className={styles.arrowButton}>→</button>
                    </div>
                </div>

                <div className={styles.infoWrapper}>
                    <div id="room6" className={`${styles.room} ${styles.room6}`}>
                        <button onClick={() => changeBackground('room6', -1)} className={styles.arrowButton}>←</button>
                        <button onClick={() => changeBackground('room6', 1)} className={styles.arrowButton}>→</button>
                    </div>
                    <div className={styles.text}>
                        <h1>Vermelho</h1>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>

                <div className={styles.infoWrapper}>
                    <div className={styles.text}>
                        <h1>Verde</h1>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div id="room7" className={`${styles.room} ${styles.room7}`}>
                        <button onClick={() => changeBackground('room7', -1)} className={styles.arrowButton}>←</button>
                        <button onClick={() => changeBackground('room7', 1)} className={styles.arrowButton}>→</button>
                    </div>
                </div>

                <div className={styles.infoWrapper}>
                    <div id="room8" className={`${styles.room} ${styles.room8}`}>
                        <button onClick={() => changeBackground('room8', -1)} className={styles.arrowButton}>←</button>
                        <button onClick={() => changeBackground('room8', 1)} className={styles.arrowButton}>→</button>
                    </div>
                    <div className={styles.text}>
                        <h1>Espelhos</h1>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>

                <div className={styles.infoWrapper}>
                    <div className={styles.text}>
                        <h1>Xana</h1>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div id="room9" className={`${styles.room} ${styles.room9}`}>
                        <button onClick={() => changeBackground('room9', -1)} className={styles.arrowButton}>←</button>
                        <button onClick={() => changeBackground('room9', 1)} className={styles.arrowButton}>→</button>
                    </div>
                </div>

                <div className={styles.infoWrapper}>
                    <div id="room10" className={`${styles.room} ${styles.room10}`}>
                        <button onClick={() => changeBackground('room10', -1)} className={styles.arrowButton}>←</button>
                        <button onClick={() => changeBackground('room10', 1)} className={styles.arrowButton}>→</button>
                    </div>
                    <div className={styles.text}>
                        <h1>Xana Casal</h1>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>

                <div className={styles.infoWrapper}>
                    <div className={styles.text}>
                        <h1>Gessos</h1>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div id="room11" className={`${styles.room} ${styles.room11}`}>
                        <button onClick={() => changeBackground('room11', -1)} className={styles.arrowButton}>←</button>
                        <button onClick={() => changeBackground('room11', 1)} className={styles.arrowButton}>→</button>
                    </div>
                </div>

                <div className={styles.infoWrapper}>
                    <div id="room12" className={`${styles.room} ${styles.room12}`}>
                        <button onClick={() => changeBackground('room12', -1)} className={styles.arrowButton}>←</button>
                        <button onClick={() => changeBackground('room12', 1)} className={styles.arrowButton}>→</button>
                    </div>
                    <div className={styles.text}>
                        <h1>Passarinhos</h1>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>

                <div className={styles.infoWrapper}>
                    <div className={styles.text}>
                        <h1>Poço</h1>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div id="room13" className={`${styles.room} ${styles.room13}`}>
                        <button onClick={() => changeBackground('room13', -1)} className={styles.arrowButton}>←</button>
                        <button onClick={() => changeBackground('room13', 1)} className={styles.arrowButton}>→</button>
                    </div>
                </div>

                <div className={styles.infoWrapper}>
                    <div id="room14" className={`${styles.room} ${styles.room14}`}>
                        <button onClick={() => changeBackground('room14', -1)} className={styles.arrowButton}>←</button>
                        <button onClick={() => changeBackground('room14', 1)} className={styles.arrowButton}>→</button>
                    </div>
                    <div className={styles.text}>
                        <h1>Apartamento</h1>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>

        </div>

        <div className={styles.endBackground}>
            <Footer/>
        </div>

    </div>
  );
}
