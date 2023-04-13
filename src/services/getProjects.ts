import projects from '@/assets/projectsInfo.json';

import { ProjectType } from '@/types/profileData';

export async function getProjects() {
  const data = await new Promise<ProjectType[]>((resolve) => {
    resolve(projects);
  });

  return data;
}
