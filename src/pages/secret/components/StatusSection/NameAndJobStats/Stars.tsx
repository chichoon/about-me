import { StarIcon } from '@/pages/secret/assets';

interface Props {
  nOfStars: number;
}

export const Stars = ({ nOfStars }: Props) => {
  return <div>{...[Array(nOfStars)].map((v) => <StarIcon key={`star-${v}`} />)}</div>;
};
