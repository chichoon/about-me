import Link from 'next/link';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import { getResponsiveAfter } from '@/styles/getResponsiveBreakpoint';
import { COLORS } from '@/styles/colors';
import { SIZES } from '@/styles/sizes';

export const NavBar = () => {
  const router = useRouter();

  return (
    <nav css={navTabsStyle}>
      <Link href='/' css={tabStyle(router.pathname === '/')}>
        <span>홈</span>
      </Link>
      <Link href='/introduction' css={tabStyle(router.pathname === '/introduction')}>
        <span>소개</span>
      </Link>
      <Link href='/projects' css={tabStyle(router.pathname.startsWith('/projects'))}>
        <span>프로젝트</span>
      </Link>
      <Link href='/footprints' css={tabStyle(router.pathname.startsWith('/footprints'))}>
        <span>발자취</span>
      </Link>
    </nav>
  );
};

const navTabsStyle = css({
  width: '100vw',
  height: 40,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '0 50px',

  [getResponsiveAfter('M')]: {
    height: 50,
  },

  [getResponsiveAfter('SD')]: {
    padding: '0 75px 0 275px',
  },
});

const tabStyle = (isSelected: boolean) =>
  css({
    background: isSelected ? COLORS.WHITE : 'none',
    flex: 1,
    maxWidth: 100,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.2s linear',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,

    span: {
      userSelect: 'none',
      fontSize: SIZES.FONT_MS,
      color: isSelected ? COLORS.GRAY3 : COLORS.GRAY9,
    },

    ':hover': {
      backgroundColor: isSelected ? COLORS.WHITE : COLORS.GRAYE,
    },

    [getResponsiveAfter('M')]: {
      width: 100,
      height: 50,

      span: {
        fontSize: SIZES.FONT_M,
      },
    },
  });
