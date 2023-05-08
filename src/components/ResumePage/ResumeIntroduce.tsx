interface Props {
  resumeSummaries: string[];
}

export const ResumeIntroduce = ({ resumeSummaries }: Props) => {
  return (
    <section>
      {resumeSummaries.map((summary, i) => (
        <p key={`summary-${i}`}>{summary}</p>
      ))}
    </section>
  );
};
