import projects from '@/assets/data/projectsInfo.json';

export async function getProjectKeys() {
  const data = await new Promise<string[]>((resolve) => {
    resolve(Object.keys(projects));
  });

  return data;
}
