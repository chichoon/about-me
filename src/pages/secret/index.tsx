import Image from 'next/image';
import { TopButtonSection } from './TopButtonSection';
import { StatusSection } from './StatusSection/index';

const secret = () => {
  return (
    <main>
      <TopButtonSection />
      <div>
        <Image src='' alt='operator' />
        <StatusSection />
      </div>
    </main>
  );
};

export default secret;
