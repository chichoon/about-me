import Image from 'next/image';
import { useRouter } from 'next/router';

import { EmailIcon, GithubIcon } from '@/assets/svgs';
import myInfo from '@/assets/myInfo.json';

import {
  headerImageStyle,
  headerProfileCommentStyle,
  headerProfileNamespaceStyle,
  headerProfileSectionStyle,
  headerWrapperStyle,
  navTabsStyle,
  tabStyle,
} from './Header.styles';
import Link from 'next/link';

export const Header = () => {
  const router = useRouter();
  return (
    <>
      <header css={headerWrapperStyle}>
        <Image src='/profile.jpg' alt='chichoon profile' width={150} height={150} css={headerImageStyle} />
        <div css={headerProfileSectionStyle}>
          <div css={headerProfileNamespaceStyle}>
            <h1>{myInfo.name}</h1>
            <a href={`mailto:${myInfo.email}`} target='_blank'>
              <EmailIcon />
            </a>
            <a href={myInfo.github} target='_blank'>
              <GithubIcon />
            </a>
          </div>
          <h2 css={headerProfileCommentStyle}>{myInfo.bio.title}</h2>
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
