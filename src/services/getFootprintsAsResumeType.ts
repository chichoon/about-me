import { ResumeFootprintType } from '@/types/resumeData';

import footprints from '@/assets/data/footprintsInfo.json';

export async function getFootprintsAsResumeType() {
  const footprintsList = footprints as ResumeFootprintType[];
  const data = await new Promise<ResumeFootprintType[]>((resolve) => {
    resolve(footprintsList);
  });

  return data;
}
