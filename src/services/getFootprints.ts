const serverUrl = process.env.NODE_ENV === 'production' ? 'https://about-me.chichoon.com' : 'http://localhost:3000';

export async function getFootprints() {
  const data = await fetch(`${serverUrl}/footprintsInfo.json`).then((response) => response.json());

  return data;
}
