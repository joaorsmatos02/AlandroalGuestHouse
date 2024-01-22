"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';

export default function NavBar({ lang, page }: { lang: string; page: string }) {
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
            <Link href={`/${lang}`}>{dictionary.navbar.about}</Link>
          </li>
          <li>
            <Link href={`/${lang}/rooms/`}>{dictionary.navbar.rooms}</Link>
          </li>
          <li>
            <Link href={`/${lang}/museum/`}>{dictionary.navbar.museum}</Link>
          </li>
        </ul>
        <Image
          src="/images/Rural_Alberto_Logo.png"
          alt="Logo"
          layout="fill"
          objectFit="contain"
          style={{ padding: '1em', zIndex: '-1' }}
        />
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
