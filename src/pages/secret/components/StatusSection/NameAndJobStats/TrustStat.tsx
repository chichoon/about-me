import { FastForwardIcon } from '@/pages/secret/assets';
import {
  progressBarStyle,
  trustLeftTextStyle,
  trustTextStyle,
  trustTextWrapperStyle,
  trustWrapperStyle,
} from './TrustStat.styles';

interface Props {
  trustPercentage: number;
}

export const TrustStat = ({ trustPercentage }: Props) => {
  return (
    <div css={trustWrapperStyle}>
      <div css={trustTextWrapperStyle}>
        <div css={trustLeftTextStyle}>
          <span css={trustTextStyle}>신뢰도</span>
          <FastForwardIcon />
        </div>
        <span css={trustTextStyle}>{trustPercentage}%</span>
      </div>
      <div css={progressBarStyle(trustPercentage)} />
    </div>
  );
};
