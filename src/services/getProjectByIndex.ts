import { ProjectType } from '@/types/profileData';

import projects from '@/assets/projectsInfo.json';

export async function getProjectByIndex(index: number) {
  const data = await new Promise<ProjectType>((resolve, reject) => {
    if (projects.length < index) reject();
    resolve(projects[index]);
  });

  return data;
}
