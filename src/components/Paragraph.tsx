import { css } from '@emotion/react';

import { COLORS } from '@/styles/colors';
import { SIZES } from '@/styles/sizes';

interface Props {
  paragraph: string[];
  lineGap: number;
}

export const Paragraph = ({ paragraph, lineGap }: Props) => {
  return (
    <>
      {paragraph.map((sentence, i) => (
        <p key={`paragraph-${i}`} css={paragraphStyle(lineGap)}>
          {sentence}
        </p>
      ))}
    </>
  );
};

const paragraphStyle = (lineGap: number) =>
  css({
    maxWidth: SIZES.MAIN_INNER_MAX_WIDTH,
    wordBreak: 'keep-all',
    width: '100%',
    whiteSpace: 'pre-line',
    marginBottom: lineGap,
    fontSize: SIZES.FONT_M,
    fontWeight: 400,
    color: COLORS.BLACK,
    lineHeight: `${SIZES.FONT_M + 5}px`,
  });
