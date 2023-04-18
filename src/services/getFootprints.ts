import { FootprintType } from '@/types/profileData';

import footprints from '@/assets/footprintsInfo.json';

export async function getFootprints() {
  const data = await new Promise<FootprintType[]>((resolve) => {
    resolve(footprints);
  });

  return data;
}
