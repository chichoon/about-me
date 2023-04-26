import { ProjectListType, ProjectType } from '@/types/profileData';

import projects from '@/assets/data/projectsInfo.json';

export async function getProjectByKey(key: string) {
  const projectList = projects as ProjectListType;
  const data = await new Promise<ProjectType>((resolve, reject) => {
    if (!projectList[key]) reject();
    resolve(projectList[key]);
  });

  return data;
}
