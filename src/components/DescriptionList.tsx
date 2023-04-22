import { css } from '@emotion/react';

import { DescriptionType } from '@/types/profileData';

import { SIZES } from '@/styles/sizes';
import { COLORS } from '@/styles/colors';

interface Props {
  descriptionData: DescriptionType[];
}

export const DescriptionList = ({ descriptionData }: Props) => {
  return (
    <ul css={descriptionListWrapperStyle}>
      {descriptionData.map((description, index) => (
        <li key={`description-${index}`} css={descriptionElementStyle}>
          <h5>{description.title}</h5>
          {Array.isArray(description.mainText) ? (
            <ul css={descriptionInnerListStyle}>
              {description.mainText.map((text, textIndex) => (
                <li key={`description-${index}-${textIndex}`}>
                  <p css={descriptionParagraphStyle}>{text}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p css={descriptionParagraphStyle}>{description.mainText}</p>
          )}
        </li>
      ))}
    </ul>
  );
};

const descriptionListWrapperStyle = css({
  padding: 10,
  width: '100%',
  maxWidth: SIZES.MAIN_INNER_MAX_WIDTH,
});

const descriptionElementStyle = css({
  marginBottom: 10,

  h5: {
    fontSize: SIZES.FONT_ML,
    color: COLORS.GRAY3,
    marginBottom: 10,
  },

  ':last-child': {
    marginBottom: 0,
  },
});

const descriptionInnerListStyle = css({
  paddingLeft: 25,

  li: {
    listStyle: 'square',
    marginBottom: 5,
  },

  'li:last-child': {
    marginBottom: 0,
  },
});

const descriptionParagraphStyle = css({
  wordBreak: 'keep-all',
  width: '100%',
  whiteSpace: 'pre-line',
  fontSize: SIZES.FONT_M,
  color: COLORS.GRAY6,
  lineHeight: `${SIZES.FONT_M + 5}px`,
});
