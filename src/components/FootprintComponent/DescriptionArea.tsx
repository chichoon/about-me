import { FootprintType } from '@/types/profileData';
import { DescriptionList } from '@/components';

import styles from './descriptionArea.module.scss';

interface Props {
  footprint: FootprintType;
}

export const DescriptionArea = ({ footprint }: Props) => {
  return (
    <>
      <menu className={styles.tabListWrapper}>
        <li className={styles.tabListElementWrapper}>
          {/* // className={`${styles.tabListButtonWrapper} ${index === selectedTabIndex ? styles.selected :  */}
          <span>발자취 설명</span>
        </li>
      </menu>
      <DescriptionList descriptionData={footprint.description} />
    </>
  );
};
