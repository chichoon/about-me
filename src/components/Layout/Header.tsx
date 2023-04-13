import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import { BlogIcon, EmailIcon, GithubIcon } from '@/assets/svgs';
import { COLORS } from '@/styles/colors';
import { getResponsiveAfter } from '@/styles/getResponsiveBreakpoint';
import { SIZES } from '@/styles/sizes';

interface Props {
  name: string;
  email: string;
  oneLineBio: string;
  githubUsername: string;
  blogLink: string;
}

export const Header = ({ name, email, oneLineBio, githubUsername, blogLink }: Props) => {
  const router = useRouter();
  return (
    <>
      <header css={headerWrapperStyle}>
        <Image src='/profile.jpg' alt='chichoon profile' width={150} height={150} css={headerImageStyle} />
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
      <nav css={navTabsStyle}>
        <Link href='/' css={tabStyle(router.pathname === '/')}>
          <span>소개</span>
        </Link>
        <Link href='/projects' css={tabStyle(router.pathname === '/projects')}>
          <span>프로젝트</span>
        </Link>
        <Link href='/footprints' css={tabStyle(router.pathname === '/footprints')}>
          <span>발자취</span>
        </Link>
      </nav>
    </>
  );
};

const headerWrapperStyle = css({
  backgroundColor: COLORS.WHITE,
  display: 'flex',
  flexDirection: 'row',
  width: '100vw',
  height: 150,
  padding: '0 25px',
  marginBottom: 25,

  [getResponsiveAfter('SD')]: {
    padding: '0 100px',
  },
});

const headerImageStyle = css({
  borderRadius: 5,
  marginTop: 25,
  width: 125,
  height: 125,

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
  marginTop: 25,
  marginLeft: 25,
  overflowX: 'scroll',
  overflowY: 'hidden',

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

  [getResponsiveAfter('SD')]: {
    width: 700,
    marginTop: 25,
  },
});

const headerIconStyle = css({
  width: 30,
  height: 30,
});

const headerProfileCommentStyle = css({
  display: '-webkit-box',
  width: '100%',
  fontSize: SIZES.$FONT_L,
  overflow: 'hidden',
  lineClamp: 2,
  '-webkit-box-orient': 'vertical',
  '-webkit-line-clamp': 2,

  [getResponsiveAfter('SD')]: {
    lineClamp: 1,
    '-webkit-line-clamp': 1,
  },
});

const navTabsStyle = css({
  width: '100vw',
  height: 50,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '0 50px',

  [getResponsiveAfter('SD')]: {
    padding: '0 75px 0 275px',
  },
});

const tabStyle = (isSelected: boolean) =>
  css({
    background: isSelected ? COLORS.WHITE : 'none',
    width: 100,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.2s linear',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,

    span: {
      userSelect: 'none',
      fontSize: SIZES.$FONT_M,
    },

    ':hover': {
      backgroundColor: isSelected ? COLORS.WHITE : COLORS.GRAYE,
    },
  });
