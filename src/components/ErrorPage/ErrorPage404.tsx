import { css } from '@emotion/react';
import Image from 'next/image';

import { SIZES } from '@/styles/sizes';

export const ErrorPage404 = () => {
  return (
    <div css={errorSectionWrapperStyle}>
      <Image src='/error.png' priority alt='error icon' width={200} height={200} />
      <h3>페이지를 찾을 수 없습니다</h3>
    </div>
  );
};

const errorSectionWrapperStyle = css({
  display: 'flex',
  width: '100%',
  height: 300,
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
