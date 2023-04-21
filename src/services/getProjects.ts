import { ProjectListType, ProjectType } from '@/types/profileData';

import projects from '@/assets/projectsInfo.json';

export async function getProjects() {
  const projectList = projects as ProjectListType;
  const data = await new Promise<ProjectType[]>((resolve) => {
    resolve(Object.values(projectList));
  });

  return data;
}
