import { css } from '@emotion/react';

import { COLORS } from '@/styles/colors';
import { SECRET_COLORS, SECRET_LEVELS } from '../../constants';

interface Props {
  children: JSX.Element;
  level: number;
  color: string;
}

export const SkillIcon = ({ children, level, color }: Props) => {
  return (
    <div css={skillIconWrapperStyle(color)}>
      <div css={levelViewerStyle}>
        <div>
          <div css={levelCircleStyle(level - 8 >= 0, 6, 1)} />
          <div css={levelCircleStyle(level - 9 >= 0, 1, 10)} />
          <div css={levelCircleStyle(level - 10 >= 0, 11, 10)} />
        </div>
      </div>
      {children}
    </div>
  );
};

const skillIconWrapperStyle = (color: string) =>
  css({
    width: 70,
    height: 70,
    backgroundColor: color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    border: `1px solid ${SECRET_COLORS.BG_UI}`,

    svg: {
      width: 50,
      height: 50,
      fill: COLORS.WHITE,
      filter: `drop-shadow(-5px 5px 0 ${COLORS.BLACK})`,
    },
  });

const levelViewerStyle = css({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: SECRET_LEVELS.LEVEL_UI,
  width: 20,
  height: 20,
  display: 'flex',
  backgroundColor: SECRET_COLORS.BG_UI,

  '& > div': {
    position: 'relative',
  },
});

const levelCircleStyle = (isApproached: boolean, x: number, y: number) =>
  css({
    position: 'absolute',
    top: y,
    left: x,
    backgroundColor: SECRET_COLORS.BUTTON_ICON,
    opacity: isApproached ? 1 : 0.5,
    width: 8,
    height: 8,
    borderRadius: 8,
  });
