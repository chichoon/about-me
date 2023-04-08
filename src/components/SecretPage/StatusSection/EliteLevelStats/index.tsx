import { EliteIcon } from './EliteIcon';

export const EliteLevelStats = () => {
  return (
    <div>
      <div>
        <EliteIcon />
        <div>
          <span>정예화</span>
          <span>+</span>
        </div>
      </div>
      <div>
        <div>{/* 잠재능력 아이콘 */}</div>
        <div>
          <span>잠재능력</span>
          <span>+</span>
        </div>
      </div>
    </div>
  );
};
