import { css } from '@emotion/react';
import Image from 'next/image';

import { SIZES } from '@/styles/sizes';

export const ErrorPage500 = () => {
  return (
    <div css={errorSectionWrapperStyle}>
      <Image src='/error.png' priority alt='error icon' width={200} height={200} />
      <h3>서버에 문제가 생겼어요</h3>
    </div>
  );
};

const errorSectionWrapperStyle = css({
  display: 'flex',
  width: '100vw',
  height: '100vh',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  image: {
    marginBottom: 25,
  },

  h3: {
    fontSize: SIZES.FONT_L,
  },
});
