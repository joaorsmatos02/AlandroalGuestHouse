"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '@/app/styles/navbar.module.css'

export default function NavBar({page, lang} : {page : string, lang : string}) {
  
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
        <div className={styles.navigationWrapper}>
          <ul className={styles.navigation}>
            <li>
              <Link href={`/${lang}/`}>{dictionary.navbar.about}</Link>
            </li>
            <li>
              <Link href={`/${lang}/rooms/`}>{dictionary.navbar.rooms}</Link>
            </li>
            <li>
              <Link href={`/${lang}/museum/`}>{dictionary.navbar.museum}</Link>
            </li>
          </ul>
        </div>
        <Link href={"/"}>
          <img className={styles.img}
            src="/images/Rural_Alberto_Logo.png"
            alt="Logo"
          />
        </Link>
        <div className={`${styles.navigationWrapper} ${styles.navigationWrapperLanguages}`}>
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
      </div>
      {scrolling && <div className={styles.placeholder} />}
    </div>
  );
}
