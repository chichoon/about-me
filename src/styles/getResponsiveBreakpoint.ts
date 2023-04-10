function getMinBreakpoint(media: string): number {
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

function getMaxBreakpoint(media: string): number {
  return (
    {
      M: 374,
      ML: 6599,
      SD: 767,
      MD: 999,
      LD: 1199,
      HD: 1299,
      SHD: 1799,
      QHD: 2399,
    }[media] || 0
  );
}

export function getResponsiveAfter(media: string) {
  return `@media only screen and (min-width: ${getMinBreakpoint(media)}px)`;
}

export function getResponsiveBetween(min: string, max: string) {
  return `@media only screen and (min-width: ${getMinBreakpoint(min)}px) and (max-width: ${getMaxBreakpoint(max)}px)`;
}
