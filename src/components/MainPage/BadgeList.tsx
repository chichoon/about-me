import { css } from '@emotion/react';

import { SIZES } from '@/styles/sizes';
import { StackType } from '@/types/profileData';
import { SimpleIcon } from '../SimpleIcon';
import { COLORS } from '@/styles/colors';

interface Props {
  stacks: StackType[];
}

export const BadgeList = ({ stacks }: Props) => {
  return (
    <div css={badgeWrapperStyle}>
      {stacks.map(({ name, color, logo }) => (
        <div key={`${name}-badge`} css={badgeStyle(color)}>
          <SimpleIcon slug={logo} />
          <span>{name}</span>
        </div>
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
  marginBottom: 15,
  userSelect: 'none',
});

const badgeStyle = (color: string) =>
  css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `#${color}`,
    height: SIZES.$FONT_L,
    marginRight: 10,
    marginBottom: 10,
    padding: '0 5px',

    span: {
      marginLeft: 5,
      fontSize: SIZES.$FONT_S,
      lineHeight: '15px',
      verticalAlign: 'center',
      color: COLORS.WHITE,
    },
  });
