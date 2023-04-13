import Link from 'next/link';

import { Layout } from '@/components';
import { ProfileType } from '@/types/profileData';
import { getProfile } from '@/services/getProfile';

export async function getStaticProps() {
  const data = await getProfile();
  return {
    props: { data }, // will be passed to the page component as props
  };
}

interface Props {
  data: ProfileType;
}

const projects = ({ data }: Props) => {
  return (
    <Layout profileData={data}>
      <menu>
        {data.projects.map(({ key, title }) => (
          <li key={`experience-${key}`}>
            <Link href={`/projects/${key}`}>
              <span>{title}</span>
            </Link>
          </li>
        ))}
      </menu>
    </Layout>
  );
};

export default projects;
