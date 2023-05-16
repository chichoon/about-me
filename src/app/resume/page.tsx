import { ResumeHeader, ResumeIntroduce } from '@/components';
import { getFootprints, getProfileAsResumeType, getProjectsAsResumeType } from '@/services';

import styles from './resumePage.module.scss';

const Page = async () => {
  const profileData = await getProfileAsResumeType();
  const projectData = await getProjectsAsResumeType();
  const footprintData = await getFootprints();

  return (
    <>
      <ResumeHeader profileData={profileData} />
      <main className={styles.mainWrapper}>
        <ResumeIntroduce resumeSummaries={profileData.resumeSummaries} />
      </main>
    </>
  );
};

export default Page;
