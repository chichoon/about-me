import footprints from '@/assets/footprintsInfo.json';

import { FootprintType } from '@/types/profileData';

export async function getFootprints() {
  const data = await new Promise<FootprintType[]>((resolve) => {
    resolve(footprints);
  });

  return data;
}
