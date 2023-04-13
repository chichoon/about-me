const serverUrl = process.env.NODE_ENV === 'production' ? process.env.VERCEL_URL : process.env.DEV_URL;

export async function getProjects() {
  console.log(serverUrl);
  const data = await fetch(`https://${serverUrl}/projectsInfo.json`).then((response) => response.json());

  return data;
}
