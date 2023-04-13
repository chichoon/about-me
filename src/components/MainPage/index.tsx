import Image from 'next/image';
import { css } from '@emotion/react';

interface Props {
  profileImageRef: string;
  summaries: string[];
}

export const MainPage = ({ profileImageRef, summaries }: Props) => {
  return (
    <div css={mainPageWrapperStyle}>
      <Image src={profileImageRef} alt='Profile' width={300} height={300} css={imageStyle} />
      {summaries.map((summary, i) => (
        <p key={`summary-${i}`} css={paragraphStyle}>
          {summary}
        </p>
      ))}
    </div>
  );
};

const mainPageWrapperStyle = css({
  display: 'flex',
  flexDirection: 'row',
});

const imageStyle = css({
  marginRight: 25,
});

const paragraphStyle = css({
  flex: 1,
  wordBreak: 'break-word',
});
