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
      {achievementData.map(({ title, githubLink, link: links }, index) => (
        <li key={`achievement-${index}`} css={achievementElementStyle}>
          <div css={achievementInnerLeftStyle}>
            <h5>{title}</h5>
            {githubLink && (
              <a href={githubLink} target='_blank' css={githubLinkStyle}>
                <GithubIcon />
              </a>
            )}
          </div>
          {links && (
            <ul css={innerListStyle}>
              {links.map((link, i) => (
                <li key={`achievement-${index}-${i}`}>
                  <a href={link.link} target='_blank' css={linkStyle}>
                    <span>{link.title}</span>
                  </a>
                </li>
              ))}
            </ul>
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

  ':last-child': {
    marginBottom: 0,
  },
});

const achievementInnerLeftStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 10,

  h5: {
    fontSize: SIZES.FONT_ML,
    color: COLORS.GRAY3,
  },
});

const innerListStyle = css({
  paddingLeft: 25,

  li: {
    listStyle: 'square',
    marginTop: 5,
  },

  'li:first-child': {
    marginTop: 0,
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
