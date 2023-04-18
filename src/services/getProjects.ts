import { ProjectType } from '@/types/profileData';

import projects from '@/assets/projectsInfo.json';

export async function getProjects() {
  const data = await new Promise<ProjectType[]>((resolve) => {
    resolve(projects);
  });

  return data;
}
