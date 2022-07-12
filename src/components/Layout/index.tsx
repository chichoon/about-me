import { Outlet } from 'react-router-dom';
import Header from './Header';
import styles from './layout.module.scss';

const Layout = () => {
  return (
    <div className={styles.layoutBackground}>
      <div className={styles.layoutWrapper}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
