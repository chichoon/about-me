import { ExpAndEliteLevelStats } from './ExpAndEliteLevelStats';
import { SkillsAndTalentStats } from './SkillsAndTalentStats';

export const RightStatusSection = () => {
  return (
    <section>
      <ExpAndEliteLevelStats />
      <SkillsAndTalentStats />
    </section>
  );
};
