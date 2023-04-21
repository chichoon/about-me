import Link from 'next/link';
import { css } from '@emotion/react';

import { LEVELS } from '@/styles/levels';

interface Props {
  keyValue: string;
  title: string;
  topOffset: number;
}

export const ProjectElement = ({ keyValue, title, topOffset }: Props) => {
  return (
    <li css={projectElementStyle(topOffset)}>
      <Link href={`/projects/${keyValue}`}>
        <h3>{title}</h3>
      </Link>
    </li>
  );
};

const projectElementStyle = (topOffset: number) =>
  css({
    position: 'absolute',
    zIndex: LEVELS.SUB_BRANCH,
    top: topOffset * 50,

    a: {
      width: '100%',
      height: '100%',
    },
  });
