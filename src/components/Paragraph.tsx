import { css } from '@emotion/react';

import { COLORS } from '@/styles/colors';
import { SIZES } from '@/styles/sizes';

interface Props {
  paragraph: string[];
  lineGap: number;
  fontSize?: number;
}

export const Paragraph = ({ paragraph, fontSize = SIZES.FONT_M, lineGap }: Props) => {
  return (
    <>
      {paragraph.map((sentence, i) => (
        <p key={`paragraph-${i}`} css={paragraphStyle(fontSize, lineGap)}>
          {sentence}
        </p>
      ))}
    </>
  );
};

const paragraphStyle = (fontSize: number, lineGap: number) =>
  css({
    maxWidth: SIZES.MAIN_INNER_MAX_WIDTH,
    wordBreak: 'keep-all',
    letterSpacing: 0.05,
    width: '100%',
    whiteSpace: 'pre-line',
    marginBottom: lineGap,
    fontSize,
    fontWeight: 400,
    color: COLORS.BLACK,
    lineHeight: `${fontSize + 5}px`,
  });
