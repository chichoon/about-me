import { useEffect, useState } from 'react';

export function useGetScreenResizeEvent() {
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

  return { windowWidth, windowHeight };
}
