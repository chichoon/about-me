import { ShareIcon } from '@/assets/svgs';

import styles from './linkButton.module.scss';

interface Props {
  href: string;
  size?: number;
  className?: string;
}

export const LinkButton = ({ href, size = 15, className }: Props) => {
  return (
    <a href={href} className={`${styles.link} ${className}`} target='_blank' style={{ width: size, height: size }}>
      <ShareIcon />
    </a>
  );
};
