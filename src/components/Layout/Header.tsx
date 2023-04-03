import Image from 'next/image';

import { EmailIcon, GithubIcon } from '@/assets/svgs';
import myInfo from '@/assets/myInfo.json';

import styles from './Header.module.scss';

export const Header = ({}) => {
  return (
    <header className={styles.headerWrapper}>
      <Image src='/profile.jpg' alt='chichoon profile' width={150} height={150} className={styles.headerImage} />
      <div className={styles.headerProfileSection}>
        <div className={styles.headerProfileNamespace}>
          <h1>{myInfo.name}</h1>
          <a href={`mailto:${myInfo.email}`} target='_blank'>
            <EmailIcon />
          </a>
          <a href={myInfo.github} target='_blank'>
            <GithubIcon />
          </a>
        </div>
        <h2 className={styles.headerProfileComment}>{myInfo.bio.title}</h2>
      </div>
    </header>
  );
};
