import { GithubIcon } from '@/assets/svgs';

import styles from './footer.module.scss';

interface Props {
  githubUsername: string;
  bioGithubLink: string;
}

export const Footer = ({ githubUsername, bioGithubLink }: Props) => {
  return (
    <footer className={styles.footerWrapper}>
      <span>© 2022 {githubUsername}</span>
      <a href={bioGithubLink} target='_blank'>
        <GithubIcon />
      </a>
    </footer>
  );
};
