import { ProjectKeyAndTitleType, ProjectListType } from '@/types/profileData';

import projects from '@/assets/projectsInfo.json';

export async function getProjectKeys() {
  const projectList = projects as ProjectListType;
  const data = await new Promise<ProjectKeyAndTitleType[]>((resolve) => {
    resolve(Object.keys(projectList).map((key) => ({ key, title: projectList[key].title })));
  });

  return data;
}
