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
              <div className={`${styles.photo} ${styles.photo0}`}/>
              <div className={styles.pricingDiv}>
                <p>
                            Welcome to our extraordinary museum, a captivating journey through the ages that transcends borders and encapsulates the essence of global heritage. 
                            Housed within the historic walls of our 300-year-old building in Alandroal, our museum is a testament to the richness and diversity of cultures from around the world. 
                            With a vast collection of artifacts, each with its own story to tell, our exhibits invite you to explore the beauty, artistry, and historical significance of civilizations spanning continents.
                </p>
              </div>
          </div>

          <div className={styles.infoWrapper}>
                <div className={styles.imageTextWrapper}>
                    <div className={styles.exhibition}>
                        <h1>Exhibition</h1>
                        <br/>
                        <p>
                            Immerse yourself in a curated experience that unveils the mysteries of ancient civilizations, showcases exquisite craftsmanship, and celebrates the shared human narrative. 
                            From artifacts that echo the grandeur of ancient empires to items reflecting the daily lives of diverse cultures, our museum invites you on a fascinating and enlightening journey. 
                            Whether you're a history enthusiast or a curious explorer, our museum offers a unique opportunity to connect with the past and appreciate the global tapestry that has shaped our world.
                        </p>
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

        <div className={styles.endBackground}>
            <Footer/>
        </div>

    </div>
  );
}
