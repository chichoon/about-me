import { Header } from './Header';

import { ProfileType } from '@/types/profileData';
import { Footer } from './Footer';
import { HeadMetaData } from './HeadMetaData';

import { mainWrapperStyle } from './Layout.styles';

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
      <main css={mainWrapperStyle}>
        <div>{children}</div>
      </main>
      <Footer githubUsername={githubUsername} bioGithubLink={bioGithubLink} />
    </>
  );
};
