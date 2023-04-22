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
          <p>{description.mainText}</p>
        </li>
      ))}
    </ul>
  );
};

const descriptionListWrapperStyle = css({
  marginBottom: 15,
  padding: 10,
});

const descriptionElementStyle = css({
  marginBottom: 10,

  h5: {
    fontSize: SIZES.FONT_ML,
    color: COLORS.GRAY3,
    marginBottom: 5,
  },

  p: {
    wordBreak: 'break-word',
    width: '100%',
    whiteSpace: 'pre-line',
    fontSize: SIZES.FONT_M,
    color: COLORS.GRAY6,
  },

  ':last-child': {
    marginBottom: 0,
  },
});
