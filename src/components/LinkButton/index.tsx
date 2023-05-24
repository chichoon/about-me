import Link from 'next/link';

import styles from './linkButton.module.scss';

interface Props {
  children: JSX.Element;
  href: string;
  className?: string;
}

export const LinkButton = ({ children, href, className }: Props) => {
  return (
    <Link href={href} className={`${styles.link} ${className}`}>
      {children}
    </Link>
  );
};
