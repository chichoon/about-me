import { ProjectListType } from '@/types/profileData';

import projects from '@/assets/projectsInfo.json';

export async function getProjectKeys() {
  const data = await new Promise<string[]>((resolve) => {
    resolve(Object.keys(projects as ProjectListType));
  });

  return data;
}
