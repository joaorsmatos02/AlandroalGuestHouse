import NavBar from './components/navbar/Navbar'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
        <NavBar />
        <div className={styles.background}>
            <h1>Alandroal Guest House</h1>
        </div>
    </div>
  );
}
