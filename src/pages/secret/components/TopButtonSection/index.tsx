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
  buttonIconStyle,
} from './TopButtonSection.styles';
import { GoHomeButton } from './GoHomeButton';

export const TopButtonSection = () => {
  return (
    <nav css={buttonWrapperStyle}>
      <div css={leftButtonWrapperStyle}>
        <button type='button' css={[topButtonStyle, goBackButtonStyle]}>
          <LeftArrowIcon css={buttonIconStyle} />
        </button>
        <GoHomeButton />
      </div>
      <button type='button' css={[topButtonStyle, infoButtonStyle]}>
        <div>
          <InfoIcon css={buttonIconStyle} />
        </div>
      </button>
      <button type='button' css={[topButtonStyle, fileIconStyle]}>
        <FileIcon />
      </button>
      <button type='button' css={topButtonStyle}>
        <HangerIcon css={buttonIconStyle} />
      </button>
      <button type='button' css={[topButtonStyle, infoButtonStyle]}>
        <RookIcon css={buttonIconStyle} />
      </button>
    </nav>
  );
};
