'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './navBar.module.scss';

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navTabs}>
      <Link href='/' className={`${styles.tab} ${pathname === '/main' ? styles.selected : ''}`}>
        <span>홈</span>
      </Link>
      <Link href='/introduction' className={`${styles.tab} ${pathname === '/introduction' ? styles.selected : ''}`}>
        <span>소개</span>
      </Link>
      <Link href='/projects' className={`${styles.tab} ${pathname === '/projects' ? styles.selected : ''}`}>
        <span>프로젝트</span>
      </Link>
      <Link href='/footprints' className={`${styles.tab} ${pathname === '/footprints' ? styles.selected : ''}`}>
        <span>발자취</span>
      </Link>
    </nav>
  );
};
