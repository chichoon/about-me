import { DescriptionType } from '@/types/profileData';

import { ShareIcon } from '@/assets/svgs';

import styles from './descriptionList.module.scss';

interface Props {
  descriptionData: DescriptionType[];
}

export const DescriptionList = ({ descriptionData }: Props) => {
  return (
    <ul className={styles.descriptionListWrapper}>
      {descriptionData.map((description, index) => (
        <li key={`description-${index}`} className={styles.descriptionElement}>
          <h5>{description.title}</h5>
          {Array.isArray(description.mainText) ? (
            <ul className={styles.descriptionInnerList}>
              {description.mainText.map((text, textIndex) => (
                <li key={`description-${index}-${textIndex}`}>
                  <p className={styles.descriptionParagraph}>{text}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.descriptionParagraph}>{description.mainText}</p>
          )}
          {description.link && (
            <ul className={styles.descriptionLinkWrapper}>
              {description.link.map((link, linkIndex) => (
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
