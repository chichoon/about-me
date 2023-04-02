import Link from 'next/link';
import Image from 'next/image';

import { Layout } from '@/components';

import myInfo from '@/assets/myInfo.json';

const Home = () => {
  return (
    <Layout>
      <>
        <Image src='/profile.png' alt='my profile photo' width={150} height={150} />
        <menu>
          {myInfo.projects.map(({ key, title }) => (
            <li key={`experience-${key}`}>
              <Link href={`/projects/${key}`}>
                <span>{title}</span>
              </Link>
            </li>
          ))}
        </menu>
      </>
    </Layout>
  );
};

export default Home;
