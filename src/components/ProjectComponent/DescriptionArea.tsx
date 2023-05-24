'use client';

import { useCallback, useEffect, useState } from 'react';

import { ProjectType } from '@/types/profileData';
import { DescriptionList } from '@/components';

import styles from './descriptionArea.module.scss';

interface Props {
  project: ProjectType;
}

export const DescriptionArea = ({ project }: Props) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  const tabNames = ['프로젝트 설명', project.technicalSpec && '기술적 도전 요소'];

  useEffect(() => {
    setSelectedTabIndex(0);
  }, [project]);

  const handleClickTab = useCallback(
    function handleClickTabCallback(clickedIndex: number) {
      return () => setSelectedTabIndex(clickedIndex);
    },
    [setSelectedTabIndex]
  );

  return (
    <>
      <menu className={styles.tabListWrapper}>
        {tabNames.map(
          (tabName, index) =>
            tabName && (
              <li key={`description-tab-${index}`} className={styles.tabListElementWrapper}>
                <button
                  type='button'
                  onClick={handleClickTab(index)}
                  className={`${styles.tabListButtonWrapper} ${index === selectedTabIndex ? styles.selected : ''}`}
                >
                  <span>{tabName}</span>
                </button>
              </li>
            )
        )}
      </menu>
      <DescriptionList descriptionData={selectedTabIndex === 0 ? project.description : project.technicalSpec ?? []} />
    </>
  );
};
