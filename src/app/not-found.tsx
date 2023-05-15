import Image from 'next/image';

import { getProfile } from '@/services';
import { CommonLayout } from '@/components';

import styles from './not-found.module.scss';

const Page = async () => {
  const data = await getProfile();

  return (
    <CommonLayout profileData={data}>
      <div className={styles.errorWrapper}>
        <Image src='/error.png' priority alt='error icon' width={200} height={200} />
        <h3>페이지를 찾을 수 없습니다!</h3>
      </div>
    </CommonLayout>
  );
};

export default Page;
