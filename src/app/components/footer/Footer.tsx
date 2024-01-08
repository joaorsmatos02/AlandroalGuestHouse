import styles from './Footer.module.css';
import Image from 'next/image';

export default function NavBar() {

  return (
    <div>
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