"use client"
import { useState } from 'react';
import Footer from '../components/footer/Footer';
import NavBar from '../components/navbar/Navbar'
import styles from './rooms.module.css'

export default function Rooms({ params: { lang } }: { params: { lang: string } }) {

    interface ImagesPerRoom {
        [roomId: string]: string[];
      }

    const imagesPerRoom : ImagesPerRoom = {
        room1: ['/images/01_Pomba/01.jpg', '/images/01_Pomba/03.jpg', '/images/01_Pomba/05.jpg', '/images/01_Pomba/07.jpg', '/images/01_Pomba/09.jpg'],
        room2: ['/images/02_Hollywood/11.jpg', '/images/02_Hollywood/12.jpg', '/images/02_Hollywood/14.jpg', '/images/02_Hollywood/15.jpg', '/images/02_Hollywood/16.jpg'],
        room3: ['/images/03_Blue/20.jpg', '/images/03_Blue/21.jpg', '/images/03_Blue/22.jpg', '/images/03_Blue/23.jpg'],
        room4: ['/images/04_Dourado/25.jpg', '/images/04_Dourado/26.jpg', '/images/04_Dourado/27.jpg', '/images/04_Dourado/28.jpg', '/images/04_Dourado/29.jpg', '/images/04_Dourado/30.jpg'],
        room5: ['/images/05_Rosa/31.jpg', '/images/05_Rosa/32.jpg', '/images/05_Rosa/33.jpg', '/images/05_Rosa/34.jpg', '/images/05_Rosa/36.jpg', '/images/05_Rosa/37.jpg'],
        room6: ['/images/06_Vermelho/38.jpg', '/images/06_Vermelho/39.jpg', '/images/06_Vermelho/40.jpg', '/images/06_Vermelho/41.jpg', '/images/06_Vermelho/42.jpg', '/images/06_Vermelho/43.jpg', '/images/06_Vermelho/44.jpg'],
        room7: ['/images/07_Verde/46.jpg', '/images/07_Verde/47.jpg', '/images/07_Verde/48.jpg', '/images/07_Verde/50.jpg', '/images/07_Verde/51.jpg', '/images/07_Verde/52.jpg'],
        room8: ['/images/08_Espelhos/53.jpg', '/images/08_Espelhos/54.jpg', '/images/08_Espelhos/56.jpg', '/images/08_Espelhos/58.jpg', '/images/08_Espelhos/59.jpg'],
        room9: ['/images/09_Xana/61.jpg', '/images/09_Xana/62.jpg', '/images/09_Xana/63.jpg', '/images/09_Xana/64.jpg', '/images/09_Xana/65.jpg', '/images/09_Xana/66.jpg'],
        room10: ['/images/10_Xana Casal/72.jpg', '/images/10_Xana Casal/69.jpg', '/images/10_Xana Casal/70.jpg', '/images/10_Xana Casal/71.jpg', '/images/10_Xana Casal/73.jpg', '/images/10_Xana Casal/75.jpg'],
        room11: ['/images/11_Gessos/76.jpg', '/images/11_Gessos/77.jpg', '/images/11_Gessos/78.jpg', '/images/11_Gessos/79.jpg', '/images/11_Gessos/80.jpg', '/images/11_Gessos/82.jpg'],
        room12: ['/images/12_Passarinhos/84.jpg', '/images/12_Passarinhos/85.jpg', '/images/12_Passarinhos/86.jpg', '/images/12_Passarinhos/87.jpg', '/images/12_Passarinhos/89.jpg'],
        room13: ['/images/13_poço/90.jpg', '/images/13_poço/91.jpg', '/images/13_poço/92.jpg', '/images/13_poço/93.jpg', '/images/13_poço/94.jpg', '/images/13_poço/149.jpg'],
        room14: ['/images/14_Apartamento/121.jpg', '/images/14_Apartamento/119.jpg', '/images/14_Apartamento/123.jpg']
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
        <NavBar lang={lang} page="rooms"/>
        
        <div className={styles.secondDiv}>

            <div className={styles.infoWrapper}>
                <div className={styles.contactsDiv}>
                    <h1>Contacts</h1>
                    <h2>Call us and book directly</h2>
                    <ul>
                        <li><a href="tel:+351 961 324 529">+351 961 324 529</a></li>
                        <li><a href="tel:0032 496 659 587">0032 496 659 587</a></li>
                        <li><a href="mailto:feelalentejoalandroal@hotmail.com">feelalentejoalandroal@hotmail.com</a></li>
                    </ul>
                </div>
            </div>

            <div className={styles.infoWrapper}>
                    <div className={styles.imageTextWrapper}>
                        <div className={styles.amenities}>
                        <p>
                        Indulge in the epitome of comfort and luxury at our exceptional accommodations in Alandroal, setting a new standard for the finest rooms in the region. 
                        Meticulously designed for your utmost relaxation, our rooms seamlessly blend modern amenities with historic charm, creating an unparalleled retreat in Alentejo. 
                        </p>
                        <br/>
                        <p>
                        Each space is a sanctuary of tranquility, promising an experience that goes beyond mere accommodation. 
                        Discover the pinnacle of comfort and sophistication, making your stay with us an unforgettable journey in the heart of Alandroal.
                        </p>
                        </div>
                        <div className={`${styles.room} ${styles.room0}`}/>
                    </div>
                    <div className={styles.secondBackground} />
                </div>

                <div className={styles.infoWrapper}>
                    <div className={styles.text}>
                        <h1>Pomba</h1>
                        <br/>
                        <p>
                            Welcome to Pomba, our rustic retreat in Alandroal. This cozy room offers two single beds, a well-equipped kitchen, and an elegant living room with leather couches. Step onto the balcony for a stunning view of Alandroal. Experience rural tranquility in style.
                        </p>
                        <br/>
                        <p>This cozy space features a bedroom with two comfortable single beds and a well-appointed toilet. 
                            The inviting living room boasts elegant leather couches, creating a perfect spot for relaxation. 
                            The fully equipped kitchen allows for convenient meal preparation. 
                            Step outside onto the balcony, where a spacious table awaits, providing a breathtaking view of Alandroal's scenic beauty. Experience the tranquility of rural tourism in this delightful haven.
                        </p>
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
                        <p>
                            Experience Hollywood glamour in our one-of-a-kind room named Hollywood. 
                            Decorated with iconic memorabilia, this unique space boasts a comfortable double bed, private toilet, and a sleek shower. 
                            Immerse yourself in the allure of the entertainment world amid the tranquility of rural surroundings. It's a stay like no other at our Hollywood-themed retreat.
                        </p>
                        <br/>
                        <p>
                            Indulge in a stay fit for the stars in our unique Hollywood" at our rustic retreat. 
                            Adorned with iconic Hollywood decor, this distinctive space features a comfortable double bed, a private toilet, and a sleek shower for your convenience. 
                            Immerse yourself in the glamour and allure of the entertainment world right in the heart of rural tranquility. 
                            Experience a stay like no other in our one-of-a-kind Hollywood-themed retreat.
                        </p>
                    </div>
                </div>

                <div className={styles.infoWrapper}>
                    <div className={styles.text}>
                        <h1>Blue</h1>
                        <br/>
                        <p>
                            Step into the soothing ambiance of our "Blue" room at our rural retreat. 
                            With two comfortable single beds and a private toilet, this cozy space is immersed in calming shades of blue. 
                            Experience the tranquility of rural charm in this thoughtfully decorated retreat, providing a peaceful haven for your stay.
                        </p>
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
                        <p>
                            Indulge in luxury at our Golden room, featuring a comfortable double bed and private toilet, all adorned in resplendent golden decor. 
                            Experience a uniquely opulent stay, where rural charm meets lavish elegance.
                        </p>
                    </div>
                </div>

                <div className={styles.infoWrapper}>
                    <div className={styles.text}>
                        <h1>Rosa</h1>
                        <br/>
                        <p>
                            Welcome to the luxurious Pink room at our rural retreat. 
                            Enjoy a cozy double bed, private toilet, and immerse yourself in an enchanting all-pink decor. 
                            Experience a uniquely opulent stay, where luxury seamlessly blends with the charm of the countryside.
                        </p>
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
                        <p>
                            Discover luxury in the Red room at our rural retreat, featuring a cozy double bed and a private toilet, all adorned in captivating all-red decor. 
                            Immerse yourself in opulence as you experience the perfect blend of comfort and rural charm. Your stay promises a memorable and indulgent escape
                        </p>
                    </div>
                </div>

                <div className={styles.infoWrapper}>
                    <div className={styles.text}>
                        <h1>Verde</h1>
                        <br/>
                        <p>
                            Indulge in luxury at our Green room, featuring two comfortable single beds and a private toilet, all adorned in soothing all-green decor. 
                            Immerse yourself in a unique blend of rural charm and opulence, creating the perfect escape for relaxation amid nature's embrace.
                        </p>
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
                        <p>
                            Welcome to the Espelhos room at our rural retreat. 
                            With a comfortable double bed and a private toilet, this cozy space offers a serene haven amidst the countryside. 
                            Immerse yourself in the reflective tranquility of our thoughtfully designed room, where modern comforts meet the charm of rural living.
                        </p>
                    </div>
                </div>

                <div className={styles.infoWrapper}>
                    <div className={styles.text}>
                        <h1>Xana</h1>
                        <br/>
                        <p>
                            Welcome to the unique Xana room at our rural retreat. 
                            With two beds and a private toilet, this charming space offers comfort and tranquility. 
                            Enjoy a distinctive view, blending historical charm with the serenity of rural living for an unforgettable stay.
                        </p>
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
                        <p>
                            Welcome to the Xana Casal room, a cozy retreat for couples at our rural haven. 
                            Featuring a comfortable double bed and a private toilet, this space offers the perfect blend of comfort and serenity. 
                            Enjoy a unique view that adds a touch of magic to your romantic getaway in the countryside.
                        </p>
                    </div>
                </div>

                <div className={styles.infoWrapper}>
                    <div className={styles.text}>
                        <h1>Gessos</h1>
                        <br/>
                        <p>
                            Welcome to the Gessos room, a tranquil retreat at our rural haven. 
                            With a comfortable double bed and a private toilet, this space offers a perfect blend of comfort and serenity. 
                            Immerse yourself in the peaceful ambiance of the countryside, creating an ideal escape for a relaxing stay.
                        </p>
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
                        <p>
                            Welcome to the "Passarinhos" room, a serene retreat at our rural haven. 
                            Featuring a comfortable double bed and a private toilet, this space provides the perfect balance of comfort and tranquility. 
                            Immerse yourself in the peaceful ambiance of the countryside, creating an ideal escape for a restful stay.
                        </p>
                    </div>
                </div>

                <div className={styles.infoWrapper}>
                    <div className={styles.text}>
                        <h1>Poço</h1>
                        <br/>
                        <p>
                            Welcome to the unique Poço room at our rural haven. This distinctive space features a one-of-a-kind tabletop with a well underground, adding a touch of novelty to your stay. 
                            With a comfortable double bed, private toilet, and a cozy living room, the Poço room offers a perfect blend of comfort and charm. 
                            Immerse yourself in the tranquil ambiance of the countryside, creating an ideal escape for a memorable and relaxing stay.
                        </p>
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
                        <p>
                            Welcome to our charming apartment, aptly named Apartamento. 
                            This delightful space features two single beds, a fully equipped kitchen, and a private toilet. 
                            Immerse yourself in the comfortable ambiance of this unique accommodation, offering the perfect blend of convenience and tranquility. 
                            Whether you're exploring the kitchen's culinary possibilities or simply relaxing in this cozy space, the Apartamento ensures a delightful and memorable stay at our rural retreat.
                        </p>
                    </div>
                </div>

        </div>

        <div className={styles.endBackground}>
            <Footer/>
        </div>

    </div>
  );
}
