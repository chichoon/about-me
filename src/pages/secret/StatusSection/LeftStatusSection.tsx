import { NumeralStats } from './NumeralStats';
import { NameAndJobStats } from './NameAndJobStats';

export const LeftStatusSection = () => {
  return (
    <section>
      <NumeralStats />
      <NameAndJobStats />
    </section>
  );
};
