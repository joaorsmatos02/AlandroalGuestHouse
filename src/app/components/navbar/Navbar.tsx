import Link from "next/link";
import styles from "./Navbar.module.css"; // Adjust the path accordingly

export default function NavBar() {
    return (
        <div className={styles.topBar}>
            <ul className={styles.navigation}>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/rooms">Rooms</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
    );
}
