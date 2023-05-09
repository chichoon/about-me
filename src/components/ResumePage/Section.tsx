import { css } from '@emotion/react';

import { SIZES } from '@/styles/sizes';
import { COLORS } from '@/styles/colors';

interface Props {
  title: string;
  children: JSX.Element;
}

export const Section = ({ title, children }: Props) => {
  return (
    <section css={sectionWrapperStyle}>
      <h2 css={titleStyle}>{title}</h2>
      <div css={innerStyle}>{children}</div>
    </section>
  );
};

const sectionWrapperStyle = css({
  width: '100%',
  marginBottom: 50,
});

const titleStyle = css({
  width: '100%',
  height: SIZES.FONT_XL + 10,
  fontSize: SIZES.FONT_XL,
  lineHeight: `${SIZES.FONT_XL + 10}px`,
  backgroundColor: COLORS.GRAYE,
  marginBottom: 20,
  padding: '0 10px',
});

const innerStyle = css({
  width: '100%',
  padding: '0 10px',
});
