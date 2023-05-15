import { Metadata } from 'next';

import { BadgeList, LinkButton } from '@/components';
import { getProfile } from '@/services';

import styles from './mainPage.module.scss';

export const metadata: Metadata = {
  title: 'About chichoon',
  description: '치춘입니다',
  keywords: 'Main Page',
};

const Page = async () => {
  const data = await getProfile();
  return (
    <>
      <BadgeList stacks={data.stacks} isCentered />
      <div className={styles.buttonWrapper}>
        <LinkButton href='/resume'>
          <span>이력서 보러가기</span>
        </LinkButton>
      </div>
    </>
  );
};

export default Page;
