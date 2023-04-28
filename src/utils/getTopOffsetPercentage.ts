export function getTopOffsetPercentage(min: number, max: number, year: number, month: number) {
  return (max - (year * 12 + month)) / (max - min);
}
