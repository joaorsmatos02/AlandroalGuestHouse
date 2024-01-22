import Footer from '../components/footer/Footer';
import NavBar from '../components/navbar/Navbar'
import styles from './museum.module.css'

export default async function Museum({ params: { lang } }: { params: { lang: string } }) {

    const dictionary = await import(`@/dictionaries/${lang}.json`);

  return (
    <div>
        <NavBar lang={lang} page="museum"/>

        <div className={styles.background}>
            <h1>{dictionary.museum.title}</h1>
        </div>

        <div className={styles.secondDiv}>

          <div className={styles.infoWrapper}>
              <div className={`${styles.photo} ${styles.photo0}`}/>
              <div className={styles.pricingDiv}>
                <p>{dictionary.museum.intro}</p>
              </div>
          </div>

          <div className={styles.infoWrapper}>
                <div className={styles.imageTextWrapper}>
                    <div className={styles.exhibition}>
                        <h1>{dictionary.museum.exhibition.title}</h1>
                        <br/>
                        <p>{dictionary.museum.exhibition.description}</p>
                    </div>
                    <div className={`${styles.photo} ${styles.photo01}`}/>
                </div>
                <div className={styles.secondBackground} />
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
                <div className={`${styles.photo} ${styles.photo7}`}/>
            </div>

            <div className={styles.infoWrapper}>
                <div className={`${styles.photo} ${styles.photo8}`}/>
                <div className={`${styles.photo} ${styles.photo9}`}/>
            </div>

            <div className={styles.infoWrapper}>
                <div className={`${styles.photo} ${styles.photo10}`}/>
                <div className={`${styles.photo} ${styles.photo11}`}/>
            </div>

        </div>

        <Footer/>

    </div>
  );
}
