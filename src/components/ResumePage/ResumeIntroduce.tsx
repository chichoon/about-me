import { Title } from './Title';

interface Props {
  resumeSummaries: string[];
}

export const ResumeIntroduce = ({ resumeSummaries }: Props) => {
  return (
    <section>
      <Title title='소개' color='#CCCCCC' />
      {resumeSummaries.map((summary, i) => (
        <p key={`summary-${i}`}>{summary}</p>
      ))}
    </section>
  );
};
