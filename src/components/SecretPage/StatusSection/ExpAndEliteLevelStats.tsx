import Image from 'next/image';

export const ExpAndEliteLevelStats = () => {
  return (
    <>
      <div>
        <div>
          <span>LV</span>
          <span>1</span>
        </div>
        <div>
          <div>
            <span>EXP</span>
            <span>0/100</span>
          </div>
          <span>+</span>
        </div>
      </div>
      <div>
        <div>
          <Image src='' alt='elite icon' />
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
    </>
  );
};
