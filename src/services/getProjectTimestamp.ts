import { ProjectListType, ProjectTimestampType } from '@/types/profileData';

import projects from '@/assets/projectsInfo.json';

export async function getProjectTimestamp() {
  const projectList = projects as ProjectListType;
  const data = await new Promise<ProjectTimestampType[]>((resolve) => {
    resolve(
      Object.keys(projectList).map((key) => {
        const yearAndMonth = projectList[key].startDate.split(' ').map(Number);
        return {
          key,
          title: projectList[key].title,
          year: yearAndMonth[0],
          month: yearAndMonth[1],
        };
      })
    );
  });

  return data.sort((a, b) => b.year - a.year || b.month - a.month);
}
