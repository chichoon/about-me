import profile from '@/assets/myInfo.json';

import { ProfileType } from '@/types/profileData';

export async function getProfile() {
  const data = await new Promise<ProfileType>((resolve) => {
    resolve(profile);
  });

  return data;
}
