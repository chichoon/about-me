import { Metadata } from 'next';

import { ProjectComponent } from '@/components';
import { getProjectByKey } from '@/services';

interface Props {
  params: {
    project: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const projectData = await getProjectByKey(params.project);

  return {
    title: `chichoon's project ${projectData.key}`,
    description: `치춘이 작업했던 ${projectData.title}`,
    keywords: `${projectData.key} Page`,
  };
}

const Page = async ({ params }: Props) => {
  const projectData = await getProjectByKey(params.project);

  return <ProjectComponent project={projectData} />;
};

export default Page;
