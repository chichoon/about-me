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
        src={profileData.resumeImageRef}
        alt='ji yoon choi resume photo'
        width={150}
        height={150}
        css={imageStyle}
      />
      <div css={headerInnerStyle}>
        <h1>{profileData.name}</h1>
        <div css={headerDataWrapperStyle(true)}>
          <h2>이메일</h2>
          <a href={`mailto:${profileData.email}`} target='_blank'>
            <span>{profileData.email}</span>
          </a>
        </div>
        <div css={headerDataWrapperStyle(false)}>
          <h2>전화번호</h2>
          <span>{process.env.NEXT_PUBLIC_PROFILE_PHONE_NBR}</span>
        </div>
        <div css={headerDataWrapperStyle(true)}>
          <h2>GitHub</h2>
          <a href={`https://github.com/${profileData.githubUsername}`} target='_blank'>
            <span>{`https://github.com/${profileData.githubUsername}`}</span>
          </a>
        </div>
        <div css={headerDataWrapperStyle(true)}>
          <h2>블로그</h2>
          <a href={profileData.blogLink} target='_blank'>
            <span>{profileData.blogLink}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

const headerWrapperStyle = css({
  width: '100%',
  minWidth: SIZES.RESUME_MIN_WIDTH,
  maxWidth: SIZES.RESUME_MAX_WIDTH,
  padding: 25,
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
    fontSize: SIZES.FONT_L,
    color: COLORS.BLACK,
    marginBottom: 15,
    fontWeight: 700,
  },
});

const headerDataWrapperStyle = (isLink: boolean) =>
  css({
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,

    h2: { width: 80, fontSize: SIZES.FONT_M, color: COLORS.GRAY6, userSelect: 'none' },

    span: {
      color: COLORS.GRAY9,
      textDecoration: isLink ? 'underline' : 'none',
      letterSpacing: 0.5,
      fontSize: SIZES.FONT_MS,
    },
  });
