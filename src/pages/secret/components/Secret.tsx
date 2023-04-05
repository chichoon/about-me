import { useEffect, useState } from 'react';
import Image from 'next/image';

import { TopButtonSection } from './TopButtonSection/index';
import { StatusSection } from './StatusSection/index';
import { ReactIcon } from '../assets';
import {
  groupIconStyle,
  secretPageBackgroundImageStyle,
  secretPageBackgroundWrapperStyle,
  characterImageStyle,
} from './Secret.styles';

export const Secret = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    function onScreenResize(e: Event) {
      const target = e.target as Window;
      setWindowWidth(target.innerWidth);
    }

    window.addEventListener('resize', onScreenResize);
    return () => window.removeEventListener('resize', onScreenResize);
  }, []);

  useEffect(() => {
    if (window instanceof Window) {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  return (
    <main css={secretPageBackgroundWrapperStyle}>
      {windowWidth > 300 ? (
        <>
          <Image src='/test_bg.png' width={1280} height={720} alt='background' css={secretPageBackgroundImageStyle} />
          <ReactIcon css={groupIconStyle} />
          <TopButtonSection />
          <Image src='/test_goat.png' width={720} height={720} alt='operator' css={characterImageStyle} />
          <StatusSection />
        </>
      ) : (
        <div>Width is too small!</div>
      )}
    </main>
  );
};
