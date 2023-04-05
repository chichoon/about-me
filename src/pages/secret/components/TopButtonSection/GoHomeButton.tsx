import { HomeBgSvg, HomeIcon } from '../../assets';

import { wrapperStyle, homeBgSvgStyle, homeSvgStyle } from './GoHomeButton.styles';

export const GoHomeButton = () => {
  return (
    <button type='button' css={wrapperStyle}>
      <HomeBgSvg css={homeBgSvgStyle} />
      <HomeIcon css={homeSvgStyle} />
    </button>
  );
};
