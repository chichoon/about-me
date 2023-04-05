import { LeftArrowIcon } from '@/assets/svgs';
import { HangerIcon, HomeIcon, InfoIcon, RookIcon } from '../../assets';

import styles from './TopButtonSection.module.scss';
import { FileIcon } from './FileIcon';

export const TopButtonSection = () => {
  return (
    <nav className={styles.buttonWrapper}>
      <div className={styles.leftButtonWrapper}>
        <button type='button' className={`${styles.topButton} ${styles.goBackButton}`}>
          <LeftArrowIcon />
        </button>
        <button type='button' className={`${styles.topButton} ${styles.homeButton}`}>
          <HomeIcon />
        </button>
      </div>
      <button type='button' className={`${styles.topButton} ${styles.infoButton}`}>
        <div>
          <InfoIcon />
        </div>
      </button>
      <button type='button' className={`${styles.topButton} ${styles.fileIcon}`}>
        <FileIcon />
      </button>
      <button type='button' className={styles.topButton}>
        <HangerIcon />
      </button>
      <button type='button' className={`${styles.topButton} ${styles.infoButton}`}>
        <RookIcon />
      </button>
    </nav>
  );
};
