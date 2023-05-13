import { ProfileType } from '@/types/profileData';
import { Header } from './Header';
import { Footer } from './Footer';

import styles from './layout.module.scss';

interface Props {
  children: JSX.Element;
  profileData: ProfileType;
}

export const Layout = ({ children, profileData }: Props) => {
  const { githubUsername, bioGithubLink } = profileData;

  return (
    <>
      <Header {...profileData} />
      <main className={styles.mainWrapper}>
        <div className={styles.mainInner}>{children}</div>
      </main>
      <Footer githubUsername={githubUsername} bioGithubLink={bioGithubLink} />
    </>
  );
};
