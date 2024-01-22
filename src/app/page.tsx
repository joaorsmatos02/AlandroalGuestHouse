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
            <h2>Hotel Rural &#x22C6;&#x22C6;&#x22C6;</h2>
        </div>

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
                <div className={styles.historyDiv}>
                    <h1>History</h1>
                    <br/>
                    <p>Welcome to our timeless rural retreat in Alandroal, Alentejo, where the echoes of history resonate within a 300-year-old building. 
                        Step into a world where every corner tells a story, and each room is a chapter in the narrative of our unique establishment. 
                        Delve into the extraordinary at our on-site museum, a treasure trove boasting a vast collection of artifacts from across the globe, offering a fascinating journey through the ages.
                    </p>
                    <br/>
                    <p>
                    Our 16 rooms are adorned with rustic, old-school charm, each one a distinctive piece of our heritage. As you wander through our historic corridors, the past comes alive, and every room whispers its own tale. 
                    Take a moment to unwind by our beautiful swimming pool, or find serenity in our designated relaxing and smoking areas, all while soaking in the picturesque views of the surrounding countryside. Begin your day with the delightful aroma of a freshly prepared breakfast, setting the tone for a day of exploration and relaxation. 
                    At our rural haven, we invite you to not only experience the tranquility of Alentejo but also embark on a global journey through the ages, where each room unfolds a unique story from far-flung corners of the world
                    </p>


                </div>
                <div className={styles.imagesWrapper}>
                    <div className={`${styles.vimage} ${styles.vimage1}`}/>
                    <div className={`${styles.vimage} ${styles.vimage2}`}/>
                </div>
            </div>

            <div className={`${styles.infoWrapper} ${styles.secondaryColor}`}>
                    <div className={styles.secondBackground} />
                    <div className={styles.roomInfo}>
                        <h1>Amenities</h1>
                        <div className={styles.checklistWrapper}>
                            <div className={styles.checklistColumn}>
                            <h2><img src='info.png' className={styles.icon}/> General</h2>
                                <ul>
                                    <li>Air conditioning</li>
                                    <li>Heating</li>
                                    <li>Smoking areas</li>
                                    <li>Family Rooms</li>
                                    <li>Shared Rooms</li>
                                </ul>
                                <h2><img src='restaurant.png' className={styles.icon}/> Food</h2>
                                <ul>
                                    <li>Room Service</li>
                                </ul>
                                <h2><img src='swimming.png' className={styles.icon}/> Pool</h2>
                                <ul>
                                    <li>Exterior Pool</li>
                                    <li>Pool Bar</li>
                                </ul>
                            </div>

                            <div className={styles.checklistColumn}>
                                <h2><img src='monitor.png' className={styles.icon}/>Technology</h2>
                                <ul>
                                    <li>Free internet access throughout</li>
                                    <li>Television</li>
                                </ul>
                                <h2><img src='bathtub.png' className={styles.icon}/>Bathrooms</h2>
                                <ul>
                                    <li>Toilet Paper</li>
                                    <li>Towels</li>
                                    <li>Bathtub / Shower</li>
                                    <li>Private Bathroom</li>
                                    <li>Hairdryer</li>
                                </ul>
                                <h2><img src='clean.png' className={styles.icon}/>Cleaning</h2>
                                <ul>
                                    <li>Free Daily Cleaning</li>
                                </ul>
                            </div>

                            <div className={styles.checklistColumn}>
                                <h2><img src='bed.png' className={styles.icon}/>Bedroom</h2>
                                <ul>
                                    <li>Bed Sheets</li>
                                </ul>
                                <h2><img src='garden.png' className={styles.icon}/>Exterior</h2>
                                <ul>
                                    <li>Outdoor Furniture</li>
                                    <li>Sunbathing Terrace</li>
                                    <li>Terrace</li>
                                    <li>Garden</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <Link href="/museum">
                    <div className={styles.museumDiv}>
                        <h1>See Our Museum</h1>
                    </div>
                </Link>

                <div className={styles.line}>
                    <h1>Gallery</h1>
                </div>

                <div className={styles.infoWrapper}>
                    <div className={`${styles.photo} ${styles.photo1}`}/>
                    <div className={`${styles.photo} ${styles.photo2}`}/>
                </div>

                <div className={styles.infoWrapper}>
                    <div className={`${styles.photo} ${styles.photo3}`}/>
                    <div className={`${styles.photo} ${styles.photo4}`}/>
                </div>

                <div className={styles.infoWrapper}>
                    <div className={`${styles.photo} ${styles.photo5}`}/>
                    <div className={`${styles.photo} ${styles.photo6}`}/>
                </div>

                <div className={styles.infoWrapper}>
                    <div className={`${styles.photo} ${styles.photo7}`}/>
                </div>

        </div>

        <div className={styles.endBackground}>
            <Footer/>
        </div>

    </div>
  );
}
