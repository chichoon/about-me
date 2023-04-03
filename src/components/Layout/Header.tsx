import { EmailIcon, GithubIcon } from '@/assets/svgs';
import Image from 'next/image';

import styles from './Header.module.scss';

export const Header = ({}) => {
  return (
    <header className={styles.headerWrapper}>
      <Image src='/profile.jpg' alt='chichoon profile' width={125} height={125} className={styles.headerImage} />
      <div className={styles.headerProfileSection}>
        <div className={styles.headerProfileNamespace}>
          <h1>최지윤</h1>
          <a href='mailto:chichoon.choi@gmail.com' target='_blank'>
            <EmailIcon />
          </a>
          <a href='https://github.com/chichoon' target='_blank'>
            <GithubIcon />
          </a>
        </div>
        <h2>한줄소개한줄소개한줄소개한줄소개한줄소개한줄소개한줄소개</h2>
      </div>
    </header>
  );
};
