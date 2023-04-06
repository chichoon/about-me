import { LeftArrowIcon } from '@/assets/svgs';
import { FileIcon } from './FileIcon';
import { HangerIcon, InfoIcon, RookIcon } from '@/components/SecretPage/assets';

import {
  buttonWrapperStyle,
  leftButtonWrapperStyle,
  topButtonStyle,
  goBackButtonStyle,
  infoButtonStyle,
  fileIconStyle,
  buttonIconStyle,
} from './NavButtonSection.styles';
import { GoHomeButton } from './GoHomeButton';

export const NavButtonSection = () => {
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
