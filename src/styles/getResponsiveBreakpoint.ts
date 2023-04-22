export function getMinBreakpoint(media: string | number): number {
  if (typeof media === 'number') return media;
  return (
    {
      M: 375,
      ML: 600,
      SD: 768,
      MD: 1000,
      LD: 1200,
      HD: 1300,
      SHD: 1800,
      QHD: 2400,
    }[media] || 0
  );
}

function getMaxBreakpoint(media: string | number): number {
  if (typeof media === 'number') return media;
  return (
    {
      M: 374,
      ML: 599,
      SD: 767,
      MD: 999,
      LD: 1199,
      HD: 1299,
      SHD: 1799,
      QHD: 2399,
    }[media] || 0
  );
}

export function getResponsiveAfter(media: string | number) {
  return `@media only screen and (min-width: ${getMinBreakpoint(media)}px)`;
}

export function getResponsiveBetween(min: string | number, max: string | number) {
  return `@media only screen and (min-width: ${getMinBreakpoint(min)}px) and (max-width: ${getMaxBreakpoint(max)}px)`;
}
