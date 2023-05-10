import { ProfileType } from '@/types/profileData';
import { Header } from './Header';
import { Footer } from './Footer';
import { HeadMetaData } from './HeadMetaData';

import styles from './layout.module.scss';

interface Props {
  children: JSX.Element;
  profileData: ProfileType;
}

export const Layout = ({ children, profileData }: Props) => {
  const { githubUsername, bioGithubLink } = profileData;

  return (
    <>
      <HeadMetaData />
      <Header {...profileData} />
      <main className={styles.mainWrapper}>
        <div className={styles.mainInner}>{children}</div>
      </main>
      <Footer githubUsername={githubUsername} bioGithubLink={bioGithubLink} />
    </>
  );
};
