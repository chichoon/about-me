import cx from 'classnames';

import { SimpleIcon } from '../SimpleIcon';
import { StackType } from '@/types/profileData';

import styles from './badgeList.module.scss';

interface Props {
  stacks: StackType[];
  isCentered?: boolean;
  className?: string;
}

export const BadgeList = ({ stacks, isCentered, className }: Props) => {
  return (
    <div className={cx(styles.badgeWrapper, { [styles.centered]: isCentered }, className)}>
      {stacks.map(({ name, color, logo }) => (
        <div key={`${name}-badge`} style={{ backgroundColor: '#' + color }} className={styles.badge}>
          <SimpleIcon slug={logo} />
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
};
