import { iconWrapperStyle, statChipWrapperStyle } from './StatChip.styles';

interface Props {
  children: JSX.Element;
  value: number | string;
  maxValue?: number;
  hoverText?: string;
}

export const StatChip = ({ children, value, maxValue, hoverText }: Props) => {
  console.log(hoverText);
  return (
    <div css={statChipWrapperStyle}>
      <div css={iconWrapperStyle}>{children}</div>
      <div>
        <span>{value}</span>
      </div>
    </div>
  );
};
