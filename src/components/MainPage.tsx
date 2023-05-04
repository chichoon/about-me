import { StackType } from '@/types/profileData';
import { BadgeList } from './BadgeList';

interface Props {
  stacks: StackType[];
}

export const MainPage = ({ stacks }: Props) => {
  return (
    <>
      <BadgeList stacks={stacks} isCentered />
      <p>열심히살자.</p>
    </>
  );
};
