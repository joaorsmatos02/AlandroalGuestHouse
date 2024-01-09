"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';

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
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/rooms">Rooms</Link>
          </li>
          <li>
            <Link href="/museum">Museum</Link>
          </li>
          <li>
            <Link href="/contacts">Contacts</Link>
          </li>
        </ul>
        <Image
          src="/images/Rural_Alberto_Logo.png"
          alt="Logo"
          layout='fill'
          objectFit='contain'
          style={{ padding: '1em', zIndex: '-1' }}
        />
        <ul className={styles.navigation}>
          <li>
            <Link href="/pt">pt</Link>
          </li>
          <li>
            <Link href="/en">en</Link>
          </li>
          <li>
            <Link href="/fr">fr</Link>
          </li>
        </ul>
      </div>
      {scrolling && <div className={styles.placeholder} />}
    </div>
  );
}