import Footer from '../components/footer/Footer';
import NavBar from '../components/navbar/Navbar'
import styles from './contacts.module.css'

export default function Home() {
  return (
    <div>
        <NavBar />

        <div className={styles.background}>
            <h1>Contacts</h1>
        </div>

        <Footer/>
    </div>
  );
}
