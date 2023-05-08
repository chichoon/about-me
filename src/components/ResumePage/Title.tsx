import { css } from '@emotion/react';

import { SIZES } from '@/styles/sizes';

interface Props {
  title: string;
  color: string;
}

export const Title = ({ title, color }: Props) => {
  return <h2 css={titleStyle(color)}>{title}</h2>;
};

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
