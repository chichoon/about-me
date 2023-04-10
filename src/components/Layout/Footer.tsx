import { GithubIcon } from '@/assets/svgs';
import { footerWrapperStyle } from './Footer.styles';

export const Footer = () => {
  return (
    <footer css={footerWrapperStyle}>
      <span>© 2022 chichoon</span>
      <a href='https://github.com/chichoon/about-me' target='_blank'>
        <GithubIcon />
      </a>
    </footer>
  );
};
