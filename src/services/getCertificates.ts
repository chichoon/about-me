import { CertificateType } from '@/types/certificateData';

import certificates from '@/assets/data/certificateInfo.json';

export async function getCertificates() {
  const data = await new Promise<CertificateType[]>((resolve) => {
    resolve(certificates);
  });

  return data;
}
