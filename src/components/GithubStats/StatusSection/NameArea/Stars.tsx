import { css } from '@emotion/react';

import { StarIcon } from '@/components/GithubStats/assets';
import { COLORS } from '@/styles/colors';
import { ELEMENT_SHADOW } from '@/components/GithubStats/constants';

interface Props {
  nOfStars: number;
}

export const Stars = ({ nOfStars }: Props) => {
  return (
    <div css={starWrapper}>
      {[...Array(nOfStars)].map((_, i) => (
        <StarIcon key={`star-${i}`} />
      ))}
    </div>
  );
};

const starWrapper = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: -5,
  marginLeft: -5,

  svg: {
    width: 40,
    height: 40,
    transform: 'rotate(15deg)',
    fill: COLORS.WHITE,
    filter: `drop-shadow(${ELEMENT_SHADOW})`,

    ':not(:first-child)': {
      marginLeft: -10,
    },
  },
});
