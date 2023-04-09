import { useEffect, useState } from 'react';
import Image from 'next/image';

import { NavButtonSection } from '@/components/GithubStats/NavButtonSection';
import { StatusSection } from '@/components/GithubStats/StatusSection';
import { ReactIcon } from '@/components/GithubStats/assets';

import {
  groupIconStyle,
  statPageBackgroundWrapperStyle,
  characterImageStyle,
  tooSmallMessage,
} from '@/components/GithubStats/GithubStats.styles';

export const GithubStats = () => {
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
    <main css={statPageBackgroundWrapperStyle}>
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
