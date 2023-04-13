const serverUrl = process.env.NODE_ENV === 'production' ? process.env.VERCEL_URL : process.env.DEV_URL;

export async function getFootprints() {
  const data = await fetch(`https://${serverUrl}/footprintsInfo.json`).then((response) => response.json());

  return data;
}
