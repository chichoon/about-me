import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <img className={styles.headerImage} src='/images/profilePhoto.webp' alt='my face' />
      <div className={styles.headerLinks}>링크1 링크2 링크3</div>
    </header>
  );
};

export default Header;
