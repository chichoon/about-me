import { useEffect, useState } from 'react';
import Image from 'next/image';

import { NavButtonSection } from '@/components/SecretPage/NavButtonSection';
import { StatusSection } from '@/components/SecretPage/StatusSection';
import { ReactIcon } from '@/components/SecretPage/assets';

import {
  groupIconStyle,
  secretPageBackgroundWrapperStyle,
  characterImageStyle,
} from '@/components/SecretPage/Secret.styles';

export const SecretPage = () => {
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
          <Image src='/test.png' fill alt='operator' css={characterImageStyle} />
          <StatusSection />
        </>
      ) : (
        <div>Width is too small!</div>
      )}
    </main>
  );
};
