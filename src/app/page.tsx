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
            <h2>Hotel Rural ★★★</h2>
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
              <div className={styles.historyDiv}>
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

          <div className={`${styles.infoWrapper} ${styles.secondaryColor}`}>
                <div className={styles.secondBackground} />
                <div className={styles.roomInfo}>
                    <h1>Amenities</h1>
                    <div className={styles.checklistWrapper}>
                        <div className={styles.checklistColumn}>
                        <h2>General</h2>
                            <ul>
                                <li>Air conditioning</li>
                                <li>Heating</li>
                                <li>Family photos</li>
                                <li>Smoking areas</li>
                                <li>Shared photos</li>
                            </ul>
                            <h2>Food</h2>
                            <ul>
                                <li>photo Service</li>
                            </ul>
                        </div>

                        <div className={styles.checklistColumn}>
                            <h2>Technology</h2>
                            <ul>
                                <li>Free internet access throughout</li>
                                <li>Television</li>
                            </ul>
                            <h2>Bathphoto</h2>
                            <ul>
                                <li>Toilet Paper</li>
                                <li>Towels</li>
                                <li>Bathtub / Shower</li>
                                <li>Private Bathphoto</li>
                                <li>Hairdryer</li>
                            </ul>
                        </div>

                        <div className={styles.checklistColumn}>
                            <h2>Bedphoto</h2>
                            <ul>
                                <li>Bed Linens</li>
                            </ul>

                            <h2>Exterior</h2>
                            <ul>
                                <li>Outdoor Furniture</li>
                                <li>Sunbathing Terrace</li>
                                <li>Private Pool</li>
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

        </div>

        <div className={styles.endBackground}>
            <Footer/>
        </div>

    </div>
  );
}
