import styles from './Footer.module.css';
import Image from 'next/image';

export default function NavBar() {

  return (
    <div>
      <div className={styles.contactsDiv}>
        <ul>
            <li><a href="tel:+351 961 324 529">+351 961 324 529</a></li>
            <li><a href="tel:0032 496 659 587">0032 496 659 587</a></li>
            <li><a href="mailto:feelalentejoalandroal@hotmail.com">feelalentejoalandroal@hotmail.com</a></li>
        </ul>
      </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/Rural_Alberto_Logo.jpg"
            alt="Logo"
            layout='fill'
            objectFit='contain'
          />
        </div>
    </div>
  );
}