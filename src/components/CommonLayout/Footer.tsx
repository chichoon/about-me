import { GithubButton } from '@/components';

import styles from './footer.module.scss';

interface Props {
  githubUsername: string;
  bioGithubLink: string;
}

export const Footer = ({ githubUsername, bioGithubLink }: Props) => {
  return (
    <footer className={styles.footerWrapper}>
      <span>© 2022 {githubUsername}</span>
      <GithubButton href={bioGithubLink} size={20} />
    </footer>
  );
};
