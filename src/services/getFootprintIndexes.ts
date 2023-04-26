import footprints from '@/assets/footprintsInfo.json';

export async function getFootprintIndexes() {
  const data = await new Promise<number>((resolve) => {
    resolve(footprints.length);
  });

  return data;
}
