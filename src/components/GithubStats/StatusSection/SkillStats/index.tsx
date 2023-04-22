import { css } from '@emotion/react';

import { SkillIcon } from './SkillIcon';

import { CSSIcon, HTML5Icon, TypescriptIcon } from '@/components/GithubStats/assets';
import { SECRET_COLORS } from '@/components/GithubStats/constants';
import { COLORS } from '@/styles/colors';
import { SIZES } from '@/styles/sizes';

export const SkillStats = () => {
  return (
    <div css={skillStatsWrapperStyle}>
      <div css={skillIconsWrapperStyle}>
        <SkillIcon level={7} color='#3178C6'>
          <TypescriptIcon />
        </SkillIcon>
        <SkillIcon level={8} color='#E34F26'>
          <HTML5Icon />
        </SkillIcon>
        <SkillIcon level={9} color='#1572B6'>
          <CSSIcon />
        </SkillIcon>
      </div>
      <div css={skillInformationWrapperStyle}>
        <div css={skillRankWrapperStyle}>
          <span>RANK</span>
          <span>7</span>
        </div>
      </div>
    </div>
  );
};

const skillStatsWrapperStyle = css({
  width: 400,
  filter: `drop-shadow(0 0 2px ${SECRET_COLORS.BOX_SHADOW})`,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 10,
});

const skillIconsWrapperStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 20,

  '> div:not(:last-child)': {
    marginRight: 10,
  },
});

const skillInformationWrapperStyle = css({
  backgroundColor: SECRET_COLORS.BG_UI,
  borderRadius: 3,
  width: 360,
  height: 80,
  marginLeft: -270,
  marginTop: 40,
  padding: '10px 15px 0 120px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'flex-start',
});

const skillRankWrapperStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  span: {
    color: SECRET_COLORS.BUTTON_ICON_DIMMED,
    fontSize: SIZES.FONT_ML,
  },

  'span:last-child': {
    color: COLORS.WHITE,
    fontSize: SIZES.FONT_L,
    marginLeft: 5,
  },
});
