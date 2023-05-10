import { css } from '@emotion/react';

import { StackType } from '@/types/profileData';
import { BadgeList } from './BadgeList';
import { LinkButton } from './LinkButton';

interface Props {
  stacks: StackType[];
}

export const MainPage = ({ stacks }: Props) => {
  return (
    <>
      <BadgeList stacks={stacks} isCentered />
      <div css={buttonWrapperStyle}>
        <LinkButton href='/resume' cssStyle={linkButtonStyle}>
          <span>이력서 보러가기</span>
        </LinkButton>
      </div>
    </>
  );
};

const buttonWrapperStyle = css({
  display: 'flex',
  flexDirection: 'column',
});

const linkButtonStyle = css({});
