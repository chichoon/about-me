import Head from 'next/head';

import { Layout, BadgeList, LinkButton } from '@/components';
import { getProfile } from '@/services';

import styles from './mainPage.module.scss';

const MainPage = async () => {
  const data = await getProfile();

  return (
    <Layout profileData={data}>
      <>
        <Head>
          <meta name='title' content='About chichoon' />
          <meta name='description' content='치춘입니다' />
          <meta name='keywords' content='Main Page' />
        </Head>
        <BadgeList stacks={data.stacks} isCentered />
        <div className={styles.buttonWrapper}>
          <LinkButton href='/resume'>
            <span>이력서 보러가기</span>
          </LinkButton>
        </div>
      </>
    </Layout>
  );
};

export default MainPage;
