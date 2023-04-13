import Image from 'next/image';
import { css } from '@emotion/react';
import { COLORS } from '@/styles/colors';
import { getResponsiveAfter } from '@/styles/getResponsiveBreakpoint';

interface Props {
  profileImageRef: string;
  summaries: string[];
}

export const MainPage = ({ profileImageRef, summaries }: Props) => {
  return (
    <div css={mainPageWrapperStyle}>
      <Image src={profileImageRef} alt='Profile' width={200} height={200} css={imageStyle} />
      {summaries.map((summary, i) => (
        <p key={`summary-${i}`} css={paragraphStyle}>
          {summary}
        </p>
      ))}
    </div>
  );
};

const mainPageWrapperStyle = css({
  height: 480,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflowX: 'hidden',
  overflowY: 'scroll',

  [getResponsiveAfter('ML')]: {
    display: 'block',
  },
});

const imageStyle = css({
  borderRadius: 5,
  boxShadow: `0 0 5px 5px ${COLORS.BLACK_TRANSPARENT}`,
  marginBottom: 25,

  [getResponsiveAfter('ML')]: {
    float: 'left',
    marginRight: 25,
  },
});

const paragraphStyle = css({
  wordBreak: 'break-word',
  width: '100%',
});
