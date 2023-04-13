import { css } from '@emotion/react';

import { ProfileType } from '@/types/profileData';
import { Header } from './Header';
import { Footer } from './Footer';
import { HeadMetaData } from './HeadMetaData';

import { COLORS } from '@/styles/colors';
import { getResponsiveAfter } from '@/styles/getResponsiveBreakpoint';

interface Props {
  children: JSX.Element;
  profileData: ProfileType;
}

export const Layout = ({ children, profileData }: Props) => {
  const { githubUsername, bioGithubLink } = profileData;

  return (
    <>
      <HeadMetaData />
      <Header {...profileData} />
      <main css={mainWrapperStyle}>{children}</main>
      <Footer githubUsername={githubUsername} bioGithubLink={bioGithubLink} />
    </>
  );
};

const mainWrapperStyle = css({
  padding: '0 25px',

  [getResponsiveAfter('SD')]: {
    padding: '0 100px',
  },

  '> div': {
    backgroundColor: COLORS.WHITE,
    padding: 25,
    borderRadius: 5,

    [getResponsiveAfter('SD')]: {
      padding: 50,
    },
  },
});
