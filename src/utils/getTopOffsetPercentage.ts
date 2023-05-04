export function getTopOffsetPercentage(min: number, max: number, year: number, month: number, day: number) {
  return (max - (year * 12 * 30 + month * 30 + day)) / (max - min);
}
