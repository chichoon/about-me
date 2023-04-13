import { css } from '@emotion/react';

import { FrontIcon } from '@/components/GithubStats/assets';
import { RangeIcon } from './RangeIcon';

import { SECRET_COLORS, UI_SHADOW_DIMMED } from '@/components/GithubStats/constants';
import { SIZES } from '@/styles/sizes';

export const JobStats = () => {
  return (
    <div css={jobStatWrapperStyle}>
      <div css={[jobStatDivStyle, jobIconStyle]}>
        <FrontIcon />
      </div>
      <div css={[jobStatDivStyle, rangeWrapperStyle]}>
        <RangeIcon />
        <span>커밋 범위</span>
      </div>
      <div css={keywordWrapper}>
        <div css={[jobStatDivStyle, keywordInner]}>
          <span>
            Original UI Design & Background
            <br />ⓒ Hypergryph
          </span>
        </div>
      </div>
    </div>
  );
};

const jobStatWrapperStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const jobStatDivStyle = css({
  backgroundColor: SECRET_COLORS.BG_UI_DIMMED,
});

const jobIconStyle = css({
  width: 60,
  height: 60,
  border: `0.5px solid ${SECRET_COLORS.BUTTON_ICON}`,
  boxShadow: UI_SHADOW_DIMMED,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    width: 50,
    height: 50,
    fill: SECRET_COLORS.BUTTON_ICON,
    transform: 'rotate(-45deg)',
  },
});

const rangeWrapperStyle = css({
  marginLeft: 5,
  width: 100,
  height: 60,
  borderRadius: 3,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 3,

  span: {
    userSelect: 'none',
    fontSize: SIZES.$FONT_S,
    color: SECRET_COLORS.BUTTON_ICON,
  },
});

const keywordWrapper = css({
  width: 120,
  height: 60,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginLeft: 5,
});

const keywordInner = css({
  width: '100%',
  height: '100%',
  textAlign: 'center',
  borderRadius: 3,
  padding: 2,

  span: {
    wordBreak: 'keep-all',
    userSelect: 'none',
    color: SECRET_COLORS.BUTTON_ICON,
    fontSize: SIZES.$FONT_MS,
    lineHeight: `${SIZES.$FONT_MS}px`,
    height: `${SIZES.$FONT_MS}px`,
    verticalAlign: 'center',
  },
});
