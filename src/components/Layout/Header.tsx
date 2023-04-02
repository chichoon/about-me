import Image from 'next/image';

export const Header = ({}) => {
  return (
    <header>
      <Image src='/profile.jpg' alt='chichoon profile' width={150} height={150} />
    </header>
  );
};
