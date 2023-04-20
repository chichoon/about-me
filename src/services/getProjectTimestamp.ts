import { ProjectListType, ProjectTimestampType } from '@/types/profileData';

import projects from '@/assets/projectsInfo.json';

export async function getProjectTimestamp() {
  const projectList = projects as ProjectListType;
  const data = await new Promise<ProjectTimestampType[]>((resolve) => {
    resolve(
      Object.keys(projectList).map((key) => ({
        key,
        title: projectList[key].title,
        startDate: projectList[key].startDate,
      }))
    );
  });

  return data;
}
