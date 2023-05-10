import { SimpleIcon } from '../SimpleIcon';
import { StackType } from '@/types/profileData';

import styles from './badgeList.module.scss';

interface Props {
  stacks: StackType[];
  isCentered?: boolean;
}

export const BadgeList = ({ stacks, isCentered }: Props) => {
  return (
    <div className={`${styles.badgeWrapper} ${isCentered ? styles.centered : ''}`}>
      {stacks.map(({ name, color, logo }) => (
        <div key={`${name}-badge`} style={{ backgroundColor: '#' + color }} className={styles.badge}>
          <SimpleIcon slug={logo} />
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
};
