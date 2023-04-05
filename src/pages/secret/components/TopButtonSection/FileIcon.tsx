import styles from './FileIcon.module.scss';

export const FileIcon = () => {
  return (
    <div className={styles.wrapperDiv}>
      <div className={`${styles.innerDivElement} ${styles.innerDiv1}`} />
      <hr className={`${styles.line} ${styles.line1}`} />
      <div className={`${styles.innerDivElement} ${styles.innerDiv3}`} />
      <hr className={`${styles.line} ${styles.line2}`} />
      <div className={`${styles.innerDivElement} ${styles.innerDiv4}`} />
      <div className={styles.innerDivWrapper}>
        <div className={styles.innerDivElement} />
      </div>
    </div>
  );
};
