import footprints from '@/assets/footprintsInfo.json';
import { FootprintType } from '@/types/profileData';

export async function getFootprintByIndex(index: number) {
  const footprintList = footprints as FootprintType[];
  const data = await new Promise<FootprintType>((resolve, reject) => {
    if (!footprintList[index]) reject();
    resolve(footprintList[index]);
  });

  return data;
}
