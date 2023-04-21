import projects from '@/assets/projectsInfo.json';

export async function getProjectKeys() {
  const data = await new Promise<string[]>((resolve) => {
    resolve(Object.keys(projects));
  });

  return data;
}
