import Image from 'next/image';

import { NavBar } from './NavBar';

import { BlogIcon, EmailIcon, GithubIcon } from '@/assets/svgs';

import styles from './header.module.scss';

interface Props {
  name: string;
  email: string;
  oneLineBio: string;
  githubUsername: string;
  blogLink: string;
}

export const Header = ({ name, email, oneLineBio, githubUsername, blogLink }: Props) => {
  return (
    <>
      <header className={styles.headerWrapper}>
        <Image
          priority
          src='/profile.jpg'
          alt='chichoon profile'
          width={150}
          height={150}
          className={styles.headerImage}
        />
        <div className={styles.headerProfileSection}>
          <div className={styles.headerProfileNamespace}>
            <h1>{name}</h1>
            <a href={`mailto:${email}`} target='_blank'>
              <EmailIcon />
            </a>
            <a href={`https://github.com/${githubUsername}`} target='_blank'>
              <GithubIcon />
            </a>
            <a href={blogLink} target='_blank'>
              <BlogIcon />
            </a>
          </div>
          <h2 className={styles.headerProfileComment}>{oneLineBio}</h2>
        </div>
      </header>
      <NavBar />
    </>
  );
};
