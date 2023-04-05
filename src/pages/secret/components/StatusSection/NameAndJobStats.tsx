import localFont from 'next/font/local';
import Image from 'next/image';
import { StarIcon } from '../../assets';

const helveticaCondenced = localFont({ src: '../../../../assets/HelveticaNeue-Condensed.otf' });

export const NameAndJobStats = () => {
  return (
    <div>
      <div>
        <span>신뢰도</span>
        <span>{'>>'}</span>
        <span>0%</span>
      </div>
      <div className={helveticaCondenced.className}>
        <div>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <h1>chichoon</h1>
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
