import Image from 'next/image';
import { css } from '@emotion/react';

import { ResumeProfileType } from '@/types/resumeData';

import { SIZES } from '@/styles/sizes';
import { COLORS } from '@/styles/colors';

interface Props {
  profileData: ResumeProfileType;
}

export const ResumeHeader = ({ profileData }: Props) => {
  return (
    <header css={headerWrapperStyle}>
      <Image
        src={profileData.profileImageRef}
        alt='ji yoon choi resume photo'
        width={200}
        height={200}
        css={imageStyle}
      />
      <div css={headerInnerStyle}>
        <h1>{profileData.name}</h1>
        <div css={headerDataWrapperStyle}>
          <h2>이메일</h2>
          <a href={`mailto:${profileData.email}`}>
            <span>{profileData.email}</span>
          </a>
        </div>
        <div css={headerDataWrapperStyle}>
          <h2>전화번호</h2>
          <span>{profileData.blogLink}</span>
        </div>
        <div css={headerDataWrapperStyle}>
          <h2>GitHub</h2>
          <a href={`https://github.com/${profileData.githubUsername}`}>
            <span>{`https://github.com/${profileData.githubUsername}`}</span>
          </a>
        </div>
        <div css={headerDataWrapperStyle}>
          <h2>블로그</h2>
          <a href={profileData.blogLink}>
            <span>{profileData.blogLink}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

const headerWrapperStyle = css({
  width: '100%',
  padding: 50,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: COLORS.WHITE,
});

const imageStyle = css({
  marginRight: 40,
});

const headerInnerStyle = css({
  h1: {
    fontSize: SIZES.FONT_XL,
    color: COLORS.BLACK,
    marginBottom: 20,
    fontWeight: 700,
  },
});

const headerDataWrapperStyle = css({
  display: 'flex',
  flexDirection: 'row',
  marginBottom: 15,

  h2: { width: 80, fontSize: SIZES.FONT_ML, color: COLORS.GRAY6, userSelect: 'none' },

  span: {
    color: COLORS.GRAY9,
    textDecoration: 'underline',
  },
});