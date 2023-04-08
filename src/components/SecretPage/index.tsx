import { useEffect, useState } from 'react';
import Image from 'next/image';

import { NavButtonSection } from '@/components/SecretPage/NavButtonSection';
import { StatusSection } from '@/components/SecretPage/StatusSection';
import { ReactIcon } from '@/components/SecretPage/assets';

import {
  groupIconStyle,
  secretPageBackgroundWrapperStyle,
  characterImageStyle,
  tooSmallMessage,
} from '@/components/SecretPage/Secret.styles';

export const SecretPage = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    function onScreenResize(e: Event) {
      const target = e.target as Window;
      setWindowWidth(target.innerWidth);
      setWindowHeight(target.innerHeight);
    }

    window.addEventListener('resize', onScreenResize);
    return () => window.removeEventListener('resize', onScreenResize);
  }, []);

  useEffect(() => {
    if (window instanceof Window) {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    }
  }, []);

  return (
    <main css={secretPageBackgroundWrapperStyle}>
      {windowWidth > 900 && windowHeight > 540 ? (
        <>
          <ReactIcon css={groupIconStyle} />
          <NavButtonSection />
          <Image src='/test.png' fill alt='operator' css={characterImageStyle} />
          <StatusSection />
        </>
      ) : (
        <div css={tooSmallMessage}>
          <span>Screen is too small!</span>
        </div>
      )}
    </main>
  );
};
