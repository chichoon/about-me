import { css } from '@emotion/react';

import { DescriptionType } from '@/types/profileData';

import { SIZES } from '@/styles/sizes';

interface Props {
  title: string;
  descriptionData: DescriptionType[];
}

export const DescriptionList = ({ title, descriptionData }: Props) => {
  return (
    <ul>
      {descriptionData.map((description, index) => (
        <li key={`${title}-description-${index}`} css={descriptionElementStyle}>
          <h4>{description.title}</h4>
          <p>{description.mainText}</p>
        </li>
      ))}
    </ul>
  );
};

const descriptionElementStyle = css({
  p: {
    wordBreak: 'break-word',
    width: '100%',
    whiteSpace: 'pre-line',
    fontSize: SIZES.FONT_M,
  },
});
