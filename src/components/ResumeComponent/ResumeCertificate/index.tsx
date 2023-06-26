import { CertificateType } from '@/types/certificateData';
import { Section } from '../Section';
import { CertificateComponent } from './CertificateComponent';

interface Props {
  certificateData: CertificateType[];
}

export const ResumeCertificate = ({ certificateData }: Props) => {
  return (
    <Section title='자격증 및 언어'>
      <ul>
        {certificateData.map((certificate) => (
          <CertificateComponent certificate={certificate} key={`${certificate.key}`} />
        ))}
      </ul>
    </Section>
  );
};
