"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function NavBar({page} : {page : string}) {
  const lang = "pt";

  const [dictionary, setDictionary] = useState<any>(null);

  useEffect(() => {
    const fetchDictionary = async () => {
      const importedDictionary = await import(`@/dictionaries/${lang}.json`);
      setDictionary(importedDictionary);
    };

    fetchDictionary();
  }, [lang]);

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

  if (!dictionary) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={`${styles.topBar} ${scrolling ? styles.scrolled : ''}`}>
        <ul className={styles.navigation}>
          <li>
            <Link href={`/`}>{dictionary.navbar.about}</Link>
          </li>
          <li>
            <Link href={`/rooms/`}>{dictionary.navbar.rooms}</Link>
          </li>
          <li>
            <Link href={`/museum/`}>{dictionary.navbar.museum}</Link>
          </li>
        </ul>
        <Link href={"/"}>
          <img
            src="/images/Rural_Alberto_Logo.png"
            alt="Logo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </Link>
        <ul className={styles.navigation}>
          <li>
            <Link href={`/pt/${page}`}>pt</Link>
          </li>
          <li>
            <Link href={`/en/${page}`}>en</Link>
          </li>
          <li>
            <Link href={`/fr/${page}`}>fr</Link>
          </li>
        </ul>
      </div>
      {scrolling && <div className={styles.placeholder} />}
    </div>
  );
}
