import { css } from '@emotion/react';

import { AchievementsType } from '@/types/profileData';

import { GithubIcon } from '@/assets/svgs';

import { SIZES } from '@/styles/sizes';
import { COLORS } from '@/styles/colors';

interface Props {
  achievementData: AchievementsType[];
}

export const FootprintAchievementList = ({ achievementData }: Props) => {
  return (
    <ul css={achievementListWrapperStyle}>
      {achievementData.map(({ title, githubLink, link }, index) => (
        <li key={`achievement-${index}`} css={achievementElementStyle}>
          <h5>{title}</h5>
          {link && (
            <a href={link.link} target='_blank' css={linkStyle}>
              {link.title}
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target='_blank' css={githubLinkStyle}>
              <GithubIcon />
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

const achievementListWrapperStyle = css({
  padding: 10,
  width: '100%',
  maxWidth: SIZES.MAIN_INNER_MAX_WIDTH,
});

const achievementElementStyle = css({
  marginBottom: 15,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',

  h5: {
    fontSize: SIZES.FONT_ML,
    color: COLORS.GRAY3,
  },

  ':last-child': {
    marginBottom: 0,
  },
});

const linkStyle = css({
  color: COLORS.GRAY9,
  fontSize: SIZES.FONT_MS,
  marginLeft: 10,
});

const githubLinkStyle = css({
  width: 20,
  height: 20,
  marginLeft: 10,
  padding: 0,

  svg: {
    width: 20,
    height: 20,
  },
});
