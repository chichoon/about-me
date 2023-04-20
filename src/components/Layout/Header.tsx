import Image from 'next/image';
import { css } from '@emotion/react';

import { BlogIcon, EmailIcon, GithubIcon } from '@/assets/svgs';
import { COLORS } from '@/styles/colors';
import { getResponsiveAfter } from '@/styles/getResponsiveBreakpoint';
import { SIZES } from '@/styles/sizes';
import { NavBar } from './NavBar';

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
      <header css={headerWrapperStyle}>
        <Image priority src='/profile.jpg' alt='chichoon profile' width={150} height={150} css={headerImageStyle} />
        <div css={headerProfileSectionStyle}>
          <div css={headerProfileNamespaceStyle}>
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
          <h2 css={headerProfileCommentStyle}>{oneLineBio}</h2>
        </div>
      </header>
      <NavBar />
    </>
  );
};

const headerWrapperStyle = css({
  backgroundColor: COLORS.WHITE,
  display: 'flex',
  flexDirection: 'row',
  width: '100vw',
  height: 100,
  padding: '0 25px',
  marginBottom: 25,

  [getResponsiveAfter('M')]: {
    height: 150,
  },

  [getResponsiveAfter('SD')]: {
    padding: '0 100px',
  },
});

const headerImageStyle = css({
  borderRadius: 5,
  display: 'none',

  [getResponsiveAfter('M')]: {
    display: 'block',
    marginTop: 50,
    width: 100,
    height: 100,
  },

  [getResponsiveAfter('ML')]: {
    display: 'block',
    marginTop: 25,
    width: 125,
    height: 125,
  },

  [getResponsiveAfter('SD')]: {
    marginTop: 50,
    width: 150,
    height: 150,
  },
});

const headerProfileSectionStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  width: 300,
  height: 100,
  marginTop: 0,
  padding: 10,
  overflowX: 'scroll',
  overflowY: 'hidden',

  [getResponsiveAfter('M')]: {
    marginTop: 25,
    marginLeft: 25,
    padding: 0,
  },

  [getResponsiveAfter('SD')]: {
    justifyContent: 'flex-start',
    width: 700,
    marginTop: 50,
  },
});

const headerProfileNamespaceStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 10,

  h1: {
    fontSize: SIZES.$FONT_L,
  },

  a: {
    padding: 2.5,
    width: 25,
    height: 25,
    marginLeft: 15,
  },

  svg: {
    width: 20,
    height: 20,
  },

  [getResponsiveAfter('ML')]: {
    h1: {
      fontSize: SIZES.$FONT_XL,
    },

    a: {
      padding: 2.5,
      width: 30,
      height: 30,
      marginLeft: 15,
    },

    svg: {
      width: 25,
      height: 25,
    },
  },

  [getResponsiveAfter('SD')]: {
    width: 700,
    marginTop: 25,
  },
});

const headerProfileCommentStyle = css({
  display: '-webkit-box',
  width: '100%',
  fontSize: SIZES.$FONT_M,
  lineHeight: `${SIZES.$FONT_M}px`,
  height: SIZES.$FONT_M * 2,
  overflow: 'hidden',
  lineClamp: 2,
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,

  [getResponsiveAfter('ML')]: {
    fontSize: SIZES.$FONT_L,
    lineHeight: `${SIZES.$FONT_L}px`,
    height: SIZES.$FONT_L * 2,
  },

  [getResponsiveAfter('SD')]: {
    lineClamp: 1,
    WebkitLineClamp: 1,
    height: SIZES.$FONT_L,
  },
});
