import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { BlogIcon, EmailIcon, GithubIcon } from '@/assets/svgs';

import {
  headerImageStyle,
  headerProfileCommentStyle,
  headerProfileNamespaceStyle,
  headerProfileSectionStyle,
  headerWrapperStyle,
  navTabsStyle,
  tabStyle,
} from './Header.styles';

interface Props {
  name: string;
  email: string;
  oneLineBio: string;
  githubLink: string;
  blogLink: string;
}

export const Header = ({ name, email, oneLineBio, githubLink, blogLink }: Props) => {
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
            <a href={githubLink} target='_blank'>
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
