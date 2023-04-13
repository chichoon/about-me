import { css } from '@emotion/react';

import { GithubIcon } from '@/assets/svgs';
import { COLORS } from '@/styles/colors';
import { SIZES } from '@/styles/sizes';

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

const footerWrapperStyle = css({
  width: '100vw',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 50,

  span: {
    color: COLORS.GRAY9,
    marginRight: 10,
    fontSize: SIZES.$FONT_M,
    userSelect: 'none',
    cursor: 'default',
  },

  a: {
    padding: 0,
    margin: 0,
    width: 20,
    height: 20,
  },

  svg: {
    fill: COLORS.GRAY9,
  },
});
