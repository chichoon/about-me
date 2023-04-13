import { css } from '@emotion/react';

import { SIZES } from '@/styles/sizes';
import { StackType } from '@/types/profileData';

interface Props {
  stacks: StackType[];
}

export const BadgeList = ({ stacks }: Props) => {
  return (
    <div css={badgeWrapperStyle}>
      {stacks.map(({ name, color, logo }) => (
        <embed
          key={`${name}-badge`}
          src={`https://img.shields.io/badge/-${name}-${color}?${
            logo ? `logo=${logo}` : ''
          }&logoColor=ffffff&style=flat-square`}
          css={badgeStyle}
        />
      ))}
    </div>
  );
};

const badgeWrapperStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginBottom: 25,
  userSelect: 'none',
});

const badgeStyle = css({
  height: SIZES.$FONT_L,
  marginRight: 10,
});
