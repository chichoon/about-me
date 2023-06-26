import { CertificateType } from '@/types/certificateData';

interface Props {
  certificate: CertificateType;
}

export const CertificateComponent = ({ certificate }: Props) => {
  const date = `${certificate.year}. ${certificate.month.toString().padStart(2, '0')}`;

  return (
    <li>
      <div>
        <h3>{certificate.title}</h3>
        <span>{date}</span>
      </div>
      <div>{certificate.score}</div>
    </li>
  );
};
