import Image from 'next/image';

export const NameAndJobStats = () => {
  return (
    <div>
      <div>
        <span>신뢰도</span>
        <span>{'>>'}</span>
        <span>0%</span>
      </div>
      <div>
        <div>별별별별별별</div>
        <span>영문명</span>
        <h1>캐릭터명</h1>
      </div>
      <div>
        <Image src='' alt='job icon' />
        <div>
          <div />
          <span>공격 범위</span>
        </div>
        <div>
          <div>
            <span>원거리</span>
          </div>
          <div>
            <span>범위공격 지원 제어형</span>
          </div>
        </div>
      </div>
    </div>
  );
};
