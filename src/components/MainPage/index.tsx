import Image from 'next/image';
import { css } from '@emotion/react';

interface Props {
  profileImageRef: string;
  summary: string;
}

export const MainPage = ({ profileImageRef, summary }: Props) => {
  return (
    <div css={mainPageWrapperStyle}>
      <Image src={profileImageRef} alt='Profile' width={300} height={300} css={imageStyle} />
      <p css={paragraphStyle}>{summary}</p>
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
