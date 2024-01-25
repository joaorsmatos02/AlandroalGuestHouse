import Link from 'next/link';
import Footer from '@/app/components/footer/Footer';
import NavBar from '@/app/components/navbar/Navbar'
import styles from './page.module.css'

export default async function Page() {  

    const lang = "pt"
    const dictionary = await import(`@/dictionaries/${lang}.json`);

    return (
    <div>
        <NavBar/>

        <div className={styles.background}>
            <h1>Alandroal GuestHouse</h1>
            <h2>{dictionary.about.mainSubscript} &#x22C6;&#x22C6;&#x22C6;</h2>
        </div>

        <div className={styles.secondDiv}>

            <div className={styles.infoWrapper}>
                <div className={styles.contactsDiv}>
                    <h1>{dictionary.contacts}</h1>
                    <ul>
                        <li><a href="tel:+351 961 324 529">+351 961 324 529</a><br/>{dictionary.contactWarning}</li>
                        <li><a href="tel:0032 496 659 587">0032 496 659 587</a></li>
                        <li><a href="mailto:feelalentejoalandroal@hotmail.com">feelalentejoalandroal@hotmail.com</a></li>
                    </ul>
                </div>
            </div>

            <div className={styles.infoWrapper}>
                <div className={styles.historyDiv}>
                    <h1>{dictionary.about.history.title}</h1>
                    <br/>
                    <p>{dictionary.about.history.text1}</p>
                    <br/>
                    <p>{dictionary.about.history.text2}</p>
                </div>
                <div className={styles.imagesWrapper}>
                    <div className={`${styles.vimage} ${styles.vimage1}`}/>
                    <div className={`${styles.vimage} ${styles.vimage2}`}/>
                </div>
            </div>

            <div className={`${styles.infoWrapper} ${styles.secondaryColor}`}>
                    <div className={styles.secondBackground} />
                    <div className={styles.roomInfo}>
                        <h1>{dictionary.about.amenities.title}</h1>
                        <div className={styles.checklistWrapper}>
                            <div className={styles.checklistColumn}>
                            <h2><img src='info.png' className={styles.icon}/> {dictionary.about.amenities.checklist[0].category}</h2>
                                <ul>
                                    <li>{dictionary.about.amenities.checklist[0].items[0]}</li>
                                    <li>{dictionary.about.amenities.checklist[0].items[1]}</li>
                                    <li>{dictionary.about.amenities.checklist[0].items[2]}</li>
                                    <li>{dictionary.about.amenities.checklist[0].items[3]}</li>
                                    <li>{dictionary.about.amenities.checklist[0].items[4]}</li>
                                </ul>
                                <h2><img src='restaurant.png' className={styles.icon}/> {dictionary.about.amenities.checklist[1].category}</h2>
                                <ul>
                                    <li>{dictionary.about.amenities.checklist[1].items[0]}</li>
                                </ul>
                                <h2><img src='swimming.png' className={styles.icon}/> {dictionary.about.amenities.checklist[2].category}</h2>
                                <ul>
                                    <li>{dictionary.about.amenities.checklist[2].items[0]}</li>
                                    <li>{dictionary.about.amenities.checklist[2].items[1]}</li>
                                </ul>
                            </div>

                            <div className={styles.checklistColumn}>
                                <h2><img src='monitor.png' className={styles.icon}/>{dictionary.about.amenities.checklist[3].category}</h2>
                                <ul>
                                    <li>{dictionary.about.amenities.checklist[3].items[0]}</li>
                                    <li>{dictionary.about.amenities.checklist[3].items[1]}</li>
                                </ul>
                                <h2><img src='bathtub.png' className={styles.icon}/>{dictionary.about.amenities.checklist[4].category}</h2>
                                <ul>
                                    <li>{dictionary.about.amenities.checklist[4].items[0]}</li>
                                    <li>{dictionary.about.amenities.checklist[4].items[1]}</li>
                                    <li>{dictionary.about.amenities.checklist[4].items[2]}</li>
                                    <li>{dictionary.about.amenities.checklist[4].items[3]}</li>
                                    <li>{dictionary.about.amenities.checklist[4].items[4]}</li>
                                </ul>
                                <h2><img src='clean.png' className={styles.icon}/>{dictionary.about.amenities.checklist[5].category}</h2>
                                <ul>
                                    <li>{dictionary.about.amenities.checklist[5].items[0]}</li>
                                </ul>
                            </div>

                            <div className={styles.checklistColumn}>
                                <h2><img src='bed.png' className={styles.icon}/>{dictionary.about.amenities.checklist[6].category}</h2>
                                <ul>
                                    <li>{dictionary.about.amenities.checklist[6].items[0]}</li>
                                </ul>
                                <h2><img src='garden.png' className={styles.icon}/>{dictionary.about.amenities.checklist[7].category}</h2>
                                <ul>
                                    <li>{dictionary.about.amenities.checklist[7].items[0]}</li>
                                    <li>{dictionary.about.amenities.checklist[7].items[1]}</li>
                                    <li>{dictionary.about.amenities.checklist[7].items[2]}</li>
                                    <li>{dictionary.about.amenities.checklist[7].items[3]}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <Link href={`/museum/`}>
                    <div className={styles.museumDiv}>
                        <h1>{dictionary.about.museum}</h1>
                    </div>
                </Link>

                <div className={styles.line}>
                    <h1>{dictionary.about.gallery}</h1>
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

        <Footer/>

    </div>
  );
}