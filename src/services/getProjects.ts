const serverUrl = process.env.NODE_ENV === 'production' ? 'https://about-me.chichoon.com' : 'http://localhost:3000';

export async function getProjects() {
  const data = await fetch(`${serverUrl}/projectsInfo.json`).then((response) => response.json());

  return data;
}
