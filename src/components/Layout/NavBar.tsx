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
        <span>소개</span>
      </Link>
      <Link href='/projects' css={tabStyle(router.pathname === '/projects')}>
        <span>프로젝트</span>
      </Link>
      <Link href='/footprints' css={tabStyle(router.pathname === '/footprints')}>
        <span>발자취</span>
      </Link>
    </nav>
  );
};

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
