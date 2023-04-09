import { StarIcon } from '@/components/GithubStats/assets';
import { starWrapper } from './Stars.styles';

interface Props {
  nOfStars: number;
}

export const Stars = ({ nOfStars }: Props) => {
  return (
    <div css={starWrapper}>
      {[...Array(nOfStars)].map((v) => (
        <StarIcon key={`star-${v}`} />
      ))}
    </div>
  );
};
