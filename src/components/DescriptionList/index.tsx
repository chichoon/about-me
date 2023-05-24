import { DescriptionType } from '@/types/profileData';

import { GithubIcon, ShareIcon } from '@/assets/svgs';

import styles from './descriptionList.module.scss';

interface Props {
  descriptionData: DescriptionType[];
}

export const DescriptionList = ({ descriptionData }: Props) => {
  return (
    <ul className={styles.descriptionListWrapper}>
      {descriptionData.map(({ title, githubLink, mainText, link: links }, index) => (
        <li key={`description-${index}`} className={styles.descriptionElement}>
          <div className={styles.descriptionInnerLeft}>
            <h5>{title}</h5>
            {githubLink && (
              <a href={githubLink} target='_blank' className={styles.githubLinkStyle}>
                <GithubIcon />
              </a>
            )}
          </div>
          {Array.isArray(mainText) ? (
            <ul className={styles.descriptionInnerList}>
              {mainText.map((text, textIndex) => (
                <li key={`description-${index}-${textIndex}`}>
                  <p className={styles.descriptionParagraph}>{text}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.descriptionParagraph}>{mainText}</p>
          )}
          {links && (
            <ul className={styles.descriptionLinkWrapper}>
              {links.map((link, linkIndex) => (
                <li key={`link-${index}-${linkIndex}`}>
                  <ShareIcon />
                  <a href={link.link} target='_blank'>
                    <span>{link.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
