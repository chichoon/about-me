import { ShareIcon } from '@/assets/svgs';

import styles from './linkButton.module.scss';

interface Props {
  href: string;
  className?: string;
}

export const LinkButton = ({ href, className }: Props) => {
  return (
    <a href={href} className={`${styles.link} ${className}`} target='_blank'>
      <ShareIcon />
    </a>
  );
};
