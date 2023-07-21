'use client';
import Link from 'next/link';
import cx from 'classnames';
import { usePathname } from 'next/navigation';

import styles from './navBar.module.scss';

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navTabs}>
      <Link href='/' className={cx(styles.tab, { [styles.selected]: pathname.startsWith('/main') })}>
        <span>홈</span>
      </Link>
      <Link
        href='/introduction'
        className={cx(styles.tab, { [styles.selected]: pathname.startsWith('/introduction') })}
      >
        <span>소개</span>
      </Link>
      <Link href='/projects' className={cx(styles.tab, { [styles.selected]: pathname.startsWith('/projects') })}>
        <span>프로젝트</span>
      </Link>
      <Link href='/footprints' className={cx(styles.tab, { [styles.selected]: pathname.startsWith('/footprints') })}>
        <span>발자취</span>
      </Link>
    </nav>
  );
};
