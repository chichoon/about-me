import Link from 'next/link';

import { Layout } from '@/components';
import { ProfileType, ProjectType } from '@/types/profileData';
import { getProfile, getProjects } from '@/services';

export async function getStaticProps() {
  const profileData = await getProfile();
  const projectData = await getProjects();
  return {
    props: { profileData, projectData }, // will be passed to the page component as props
  };
}

interface Props {
  profileData: ProfileType;
  projectData: ProjectType[];
}

const projects = ({ profileData, projectData }: Props) => {
  return (
    <Layout profileData={profileData}>
      <menu>
        {projectData.map(({ key, title }) => (
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
