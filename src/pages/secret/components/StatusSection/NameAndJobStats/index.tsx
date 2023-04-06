import Image from 'next/image';
import { Roboto_Condensed } from 'next/font/google';

import { TrustStat } from './TrustStat';
import { Stars } from './Stars';

const robotoCondensed = Roboto_Condensed({ subsets: ['latin'], weight: '700' });

export const NameAndJobStats = () => {
  return (
    <div>
      <TrustStat />
      <div>
        <Stars nOfStars={4} />
        <h1 className={robotoCondensed.className}>chichoon</h1>
      </div>
      <div>
        <Image src='' alt='job icon' />
        <div>
          <div />
          <span>공격 범위</span>
        </div>
        <div>
          <div>
            <span>원거리</span>
          </div>
          <div>
            <span>범위공격 지원 제어형</span>
          </div>
        </div>
      </div>
    </div>
  );
};
