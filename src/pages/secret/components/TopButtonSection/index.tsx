import { LeftArrowIcon } from '@/assets/svgs';
import { FileIcon } from './FileIcon';
import { HangerIcon, HomeIcon, InfoIcon, RookIcon } from '../../assets';

import {
  buttonWrapperStyle,
  leftButtonWrapperStyle,
  topButtonStyle,
  goBackButtonStyle,
  homeButtonStyle,
  infoButtonStyle,
  fileIconStyle,
} from './TopButtonSection.styles';

export const TopButtonSection = () => {
  return (
    <nav css={buttonWrapperStyle}>
      <div css={leftButtonWrapperStyle}>
        <button type='button' css={[topButtonStyle, goBackButtonStyle]}>
          <LeftArrowIcon />
        </button>
        <button type='button' css={[topButtonStyle, homeButtonStyle]}>
          <HomeIcon />
        </button>
      </div>
      <button type='button' css={[topButtonStyle, infoButtonStyle]}>
        <div>
          <InfoIcon />
        </div>
      </button>
      <button type='button' css={[topButtonStyle, fileIconStyle]}>
        <FileIcon />
      </button>
      <button type='button' css={topButtonStyle}>
        <HangerIcon />
      </button>
      <button type='button' css={[topButtonStyle, infoButtonStyle]}>
        <RookIcon />
      </button>
    </nav>
  );
};
