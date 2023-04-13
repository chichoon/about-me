const serverUrl = process.env.NODE_ENV === 'production' ? process.env.VERCEL_URL : process.env.DEV_URL;

export async function getProfile() {
  const data = await fetch(`https://${serverUrl}/myInfo.json`).then((response) => response.json());

  return data;
}
