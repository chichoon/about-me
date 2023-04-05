import { useEffect, useState } from 'react';
import Image from 'next/image';

import { TopButtonSection } from './TopButtonSection';
import { StatusSection } from './StatusSection/index';

import styles from './secret.module.scss';

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
    <main className={styles.secretPageBackgroundWrapper}>
      {windowWidth > 720 ? (
        <>
          <Image
            src='/test_bg.png'
            width={1280}
            height={720}
            alt='background'
            className={styles.secretPageBackgroundImage}
          />
          <div className={styles.secretPageBackgroundInner}>
            <TopButtonSection />
            <div>
              <Image src='/test_goat.png' width={720} height={720} alt='operator' />
              <StatusSection />
            </div>
          </div>
        </>
      ) : (
        <div>Width is too small!</div>
      )}
    </main>
  );
};
