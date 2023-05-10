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
  marginBottom: 25,
});

const titleStyle = css({
  width: '100%',
  height: SIZES.FONT_L + 10,
  fontSize: SIZES.FONT_L,
  lineHeight: `${SIZES.FONT_L + 10}px`,
  backgroundColor: COLORS.GRAYE,
  marginBottom: 20,
  padding: '0 10px',
  borderBottom: `1px solid ${COLORS.GRAYE}`,
});

const innerStyle = css({
  width: '100%',
  padding: '0 10px',
});
