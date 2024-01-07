"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function NavBar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`${styles.topBar} ${scrolling ? styles.scrolled : ''}`}>
        <ul className={styles.navigation}>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/rooms">Rooms</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      {scrolling && <div className={styles.placeholder} />}
    </div>
  );
}