import { css } from '@emotion/react';

import { ShareIcon } from '@/assets/svgs';
import { COLORS } from '@/styles/colors';

interface Props {
  projectKey: string;
  digest: {
    description: string;
    link?: string[];
  }[];
}

export const ProjectDigestComponent = ({ projectKey, digest }: Props) => {
  return (
    <ul css={listWrapperStyle}>
      {digest.map(({ description, link }, index) => (
        <li key={`${projectKey}-${index}`}>
          <span>{description}</span>
          {link?.map((href, linkIndex) => (
            <a href={href} key={`${projectKey}-${index}-${linkIndex}`} target='_blank'>
              <ShareIcon />
            </a>
          ))}
        </li>
      ))}
    </ul>
  );
};

const listWrapperStyle = css({
  paddingLeft: 20,

  li: {
    listStyle: 'square',
    marginBottom: 10,
  },

  'li:last-child': {
    marginBottom: 0,
  },

  span: {
    color: COLORS.BLACK,
    lineHeight: '15px',
  },

  a: {
    width: 15,
    height: 15,
    display: 'inline-block',
    marginLeft: 5,
  },

  svg: {
    width: 15,
    height: 15,
    fill: COLORS.GRAY9,
  },
});
