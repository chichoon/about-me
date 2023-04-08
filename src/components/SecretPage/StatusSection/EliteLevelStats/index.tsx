import { EliteParallelogram } from './EliteParallelogram';

export const EliteLevelStats = () => {
  return (
    <div>
      <div>
        <EliteParallelogram />
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
