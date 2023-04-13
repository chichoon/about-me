import { GithubIcon } from '@/assets/svgs';
import { footerWrapperStyle } from './Footer.styles';

interface Props {
  githubUsername: string;
  bioGithubLink: string;
}

export const Footer = ({ githubUsername, bioGithubLink }: Props) => {
  return (
    <footer css={footerWrapperStyle}>
      <span>© 2022 {githubUsername}</span>
      <a href={bioGithubLink} target='_blank'>
        <GithubIcon />
      </a>
    </footer>
  );
};
