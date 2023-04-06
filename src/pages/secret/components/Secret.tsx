import { useEffect, useState } from 'react';
import Image from 'next/image';

import { NavButtonSection } from './NavButtonSection';
import { StatusSection } from './StatusSection';
import { ReactIcon } from '@/pages/secret/assets';

import { groupIconStyle, secretPageBackgroundWrapperStyle, characterImageStyle } from './Secret.styles';

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
          <ReactIcon css={groupIconStyle} />
          <NavButtonSection />
          <Image src='/test_goat.png' fill alt='operator' css={characterImageStyle} />
          <StatusSection />
        </>
      ) : (
        <div>Width is too small!</div>
      )}
    </main>
  );
};
