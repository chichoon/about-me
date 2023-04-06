import Image from 'next/image';

import { EmailIcon, GithubIcon } from '@/assets/svgs';
import myInfo from '@/assets/myInfo.json';

import {
  headerImageStyle,
  headerProfileCommentStyle,
  headerProfileNamespaceStyle,
  headerProfileSectionStyle,
  headerWrapperStyle,
} from './Header.styles';

export const Header = () => {
  return (
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
  );
};
