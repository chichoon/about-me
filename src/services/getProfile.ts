const serverUrl = process.env.NODE_ENV === 'production' ? 'https://about-me.chichoon.com' : 'http://localhost:3000';

export async function getProfile() {
  const data = await fetch(`${serverUrl}/myInfo.json`).then((response) => response.json());

  return data;
}
