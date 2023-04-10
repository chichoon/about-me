import Link from 'next/link';

import { Layout } from '@/components';

import myInfo from '@/assets/myInfo.json';

const projects = () => {
  return (
    <Layout>
      <main>
        <menu>
          {myInfo.projects.map(({ key, title }) => (
            <li key={`experience-${key}`}>
              <Link href={`/projects/${key}`}>
                <span>{title}</span>
              </Link>
            </li>
          ))}
        </menu>
      </main>
    </Layout>
  );
};

export default projects;
