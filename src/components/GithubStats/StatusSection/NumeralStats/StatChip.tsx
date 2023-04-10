import { iconWrapperStyle, statChipWrapperStyle, valueWrapperStyle } from './StatChip.styles';

interface Props {
  children: JSX.Element;
  value: number | string;
  maxValue?: number;
  hoverText?: string;
}

export const StatChip = ({ children, value, maxValue, hoverText }: Props) => {
  const percentage =
    typeof value === 'number' && typeof maxValue === 'number' ? Math.floor((value * 100) / maxValue) : 0;

  return (
    <div css={statChipWrapperStyle}>
      <div css={iconWrapperStyle}>{children}</div>
      <div css={valueWrapperStyle(percentage)}>
        <span>{value}</span>
      </div>
      <span style={{ display: 'none' }}>{hoverText}</span> {/* TODO: 호버링 하면 숨겨진 텍스트 표시 */}
    </div>
  );
};
