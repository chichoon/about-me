import styles from './branchListWrapper.module.scss';

interface Props {
  children: JSX.Element;
}

export const BranchListWrapper = ({ children }: Props) => {
  return <menu className={styles.projectPageMenu}>{children}</menu>;
};
