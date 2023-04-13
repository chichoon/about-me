import { TrustStat } from './TrustStat';
import { Stars } from './Stars';

import { nameStyle, subNameStyle } from './NameArea.styles';

export const NameArea = () => {
  return (
    <>
      <TrustStat trustPercentage={0} />
      <Stars nOfStars={4} />
      <h2 css={subNameStyle}>chichoon</h2>
      <h1 css={nameStyle}>chichoon</h1>
    </>
  );
};
