import { FastForwardIcon, HourglassIcon, PlusIcon, ShieldIcon, SwordIcon } from '@/components/GithubStats/assets';
import { StatChip } from './StatChip';
import { numeralStatsTitleStyle, numeralStatsWrapperStyle, statChipDividerStyle } from './NumeralStats.styles';

export const NumeralStats = () => {
  return (
    <div css={numeralStatsWrapperStyle}>
      <div css={numeralStatsTitleStyle}>
        <span>스탯</span>
        <FastForwardIcon />
      </div>
      <div css={statChipDividerStyle}>
        <StatChip value={822} maxValue={5000} hoverText='체력'>
          <PlusIcon />
        </StatChip>
        <StatChip value='느림' hoverText='체력'>
          <HourglassIcon />
        </StatChip>
      </div>
      <div css={statChipDividerStyle}>
        <StatChip value={789} maxValue={2000} hoverText='공격력'>
          <SwordIcon />
        </StatChip>
        <StatChip value={21} hoverText='코스트'>
          <ShieldIcon />
        </StatChip>
      </div>
      <div css={statChipDividerStyle}>
        <StatChip value={52} maxValue={1000} hoverText='방어력'>
          <ShieldIcon />
        </StatChip>
        <StatChip value={2} hoverText='저지 가능 수'>
          <ShieldIcon />
        </StatChip>
      </div>
      <div css={statChipDividerStyle}>
        <StatChip value={0} hoverText='마법 방어력'>
          <ShieldIcon />
        </StatChip>
        <StatChip value='다소 느림' hoverText='재배치 시간'>
          <SwordIcon />
        </StatChip>
      </div>
    </div>
  );
};
