import { Metadata } from 'next';

import { BranchListWrapper, Layout, ProjectElement } from '@/components';
import { getProfile, getProjects } from '@/services';

export const metadata: Metadata = {
  title: 'Projects of chichoon',
  description: '치춘의 프로젝트',
  keywords: 'Projects Page',
};

const Page = async () => {
  const profileData = await getProfile();
  const projectData = await getProjects();
  const projectList = Object.values(projectData);

  const date = new Date();
  const {
    startDateYear,
    startDateMonth,
    startDateDay = 1,
    fakeDateYear,
    fakeDateMonth,
    fakeDateDay,
  } = projectList[projectList.length - 1];
  const {
    endDateYear = date.getFullYear(),
    endDateMonth = date.getMonth() + 1,
    endDateDay = date.getDate(),
  } = projectList[0];
  const min =
    (fakeDateYear ?? startDateYear) * 12 * 30 + (fakeDateMonth ?? startDateMonth) * 30 + (fakeDateDay ?? startDateDay);
  const max = endDateYear * 12 * 30 + endDateMonth * 30 + endDateDay;

  return (
    <Layout profileData={profileData}>
      <BranchListWrapper>
        <>
          {projectList.map((project) => (
            <ProjectElement key={`experience-${project.key}`} project={project} minDay={min} maxDay={max} />
          ))}
        </>
      </BranchListWrapper>
    </Layout>
  );
};

export default Page;
