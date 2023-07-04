import { LinkButton } from '@/components';

import styles from './resumeProjects.module.scss';

interface Props {
  projectKey: string;
  digest: {
    description: string;
    link?: string[];
  }[];
}

export const ProjectDigestComponent = ({ projectKey, digest }: Props) => {
  return (
    <ul className={styles.listWrapper}>
      {digest.map(({ description, link }, index) => (
        <li key={`${projectKey}-${index}`}>
          <span>{description}</span>
          {link?.map((href, linkIndex) => (
            <LinkButton href={href} key={`${projectKey}-${index}-${linkIndex}`} />
          ))}
        </li>
      ))}
    </ul>
  );
};
