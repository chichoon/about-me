import { LinkButton } from '@/components';

import styles from './digestComponent.module.scss';

interface Props {
  elementKey: string;
  digest: {
    description: string;
    link?: string[];
  }[];
}

export const DigestComponent = ({ elementKey, digest }: Props) => {
  return (
    <ul className={styles.listWrapper}>
      {digest.map(({ description, link }, index) => (
        <li key={`${elementKey}-${index}`}>
          <span>{description}</span>
          {link?.map((href, linkIndex) => (
            <LinkButton href={href} key={`${elementKey}-${index}-${linkIndex}`} />
          ))}
        </li>
      ))}
    </ul>
  );
};
