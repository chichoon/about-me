import Link from 'next/link';
import { css } from '@emotion/react';

import { LEVELS } from '@/styles/levels';
import { SIZES } from '@/styles/sizes';
import { COLORS } from '@/styles/colors';

interface Props {
  keyValue: string;
  title: string;
  topOffset: number;
}

export const ProjectElement = ({ keyValue, title, topOffset }: Props) => {
  return (
    <li css={projectElementStyle(topOffset)}>
      <Link href={`/projects/${keyValue}`}>
        <div css={projectBranchStyle} />
        <h3>{title}</h3>
      </Link>
    </li>
  );
};

const projectElementStyle = (topOffset: number) =>
  css({
    position: 'absolute',
    zIndex: LEVELS.SUB_BRANCH,
    top: topOffset * SIZES.$BRANCH_MAINSTREAM_HEIGHT + 50,
    left: 15,
    border: `1px solid black`, // TODO: DEBUG
    width: '100%',
    height: 30,

    a: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      height: '100%',
    },
  });

const projectBranchStyle = css({
  position: 'relative',
  width: 300,
  height: '100%',

  ':before': {
    position: 'absolute',
    content: '""',
    backgroundColor: COLORS.GRAYC,
    width: 100,
    height: 5,
    top: 12.5,
    left: 29,
  },

  ':after': {
    position: 'absolute',
    content: '""',
    border: `5px solid ${COLORS.GRAYC}`,
    backgroundColor: COLORS.WHITE,
    width: 20,
    height: 20,
    borderRadius: 20,
    top: 0,
    left: 0,
  },
});
