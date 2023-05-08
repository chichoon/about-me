import { css } from '@emotion/react';

import { SIZES } from '@/styles/sizes';

interface Props {
  title: string;
  color: string;
  children: JSX.Element;
}

export const Section = ({ title, color, children }: Props) => {
  return (
    <section css={sectionWrapperStyle}>
      <h2 css={titleStyle(color)}>{title}</h2>
      <div>{children}</div>
    </section>
  );
};

const sectionWrapperStyle = css({
  width: '100%',

  '> div': {
    padding: '0 10px',
  },
});

const titleStyle = (color: string) =>
  css({
    width: '100%',
    height: SIZES.FONT_XL + 10,
    fontSize: SIZES.FONT_XL,
    lineHeight: `${SIZES.FONT_XL + 10}px`,
    backgroundColor: color,
    marginBottom: 20,
    padding: '0 10px',
  });
