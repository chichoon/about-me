import { useState } from 'react';

import { ProjectType } from '@/types/profileData';
import { ProjectInfoHeader } from './ProjectInfoHeader';
import { BadgeList } from '../BadgeList';
import { DescriptionList } from '../DescriptionList';
import { DescriptionSelectTab } from '../DescriptionSelectTab';

interface Props {
  project: ProjectType;
}

export const ProjectPage = ({ project }: Props) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  const tabNames = ['프로젝트 설명', project.technicalSpec && '기술적 도전 요소'];

  return (
    <>
      <ProjectInfoHeader project={project} />
      <BadgeList stacks={project.stacks} />
      <DescriptionSelectTab
        selectedTabIndex={selectedTabIndex}
        setSelectedTabIndex={setSelectedTabIndex}
        tabNames={tabNames}
      />
      <DescriptionList descriptionData={selectedTabIndex === 0 ? project.description : project.technicalSpec ?? []} />
    </>
  );
};
