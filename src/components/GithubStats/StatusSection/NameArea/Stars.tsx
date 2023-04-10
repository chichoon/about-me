import { StarIcon } from '@/components/GithubStats/assets';
import { starWrapper } from './Stars.styles';

interface Props {
  nOfStars: number;
}

export const Stars = ({ nOfStars }: Props) => {
  return (
    <div css={starWrapper}>
      {[...Array(nOfStars)].map((_, i) => (
        <StarIcon key={`star-${i}`} />
      ))}
    </div>
  );
};
