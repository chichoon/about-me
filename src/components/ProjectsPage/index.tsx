import { useEffect, useMemo, useState } from 'react';
import { css } from '@emotion/react';

import { ProjectListType } from '@/types/profileData';
import { SelectedProjectKeyContext } from '@/context';
import { useGetScreenSize } from '@/hooks';
import { ProjectListMenu } from './ProjectListMenu';

import { getMinBreakpoint } from '@/styles/getResponsiveBreakpoint';
import { ProjectPage } from '../ProjectPage';

interface Props {
  projectsData: ProjectListType;
}

export const ProjectsPage = ({ projectsData }: Props) => {
  const [selectedProjectKey, setSelectedProjectKey] = useState<string | null>(null);
  const { windowWidth } = useGetScreenSize();

  const value = useMemo(
    () => ({ selectedProjectKey, setSelectedProjectKey }),
    [selectedProjectKey, setSelectedProjectKey]
  );

  useEffect(() => {
    return () => {
      setSelectedProjectKey(null);
    };
  }, []);

  return windowWidth <= getMinBreakpoint('LD') ? (
    <ProjectListMenu projectsData={Object.values(projectsData)} />
  ) : (
    <div css={projectPageWrapperStyle}>
      <SelectedProjectKeyContext.Provider value={value}>
        <ProjectListMenu projectsData={Object.values(projectsData)} />
        {selectedProjectKey && (
          <div css={projectPageSideSectionStyle}>
            <ProjectPage project={projectsData[selectedProjectKey]} />
          </div>
        )}
      </SelectedProjectKeyContext.Provider>
    </div>
  );
};

const projectPageWrapperStyle = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
});

const projectPageSideSectionStyle = css({
  width: '100%',
  height: '100%',
  border: '1px solid black', // TODO: DEBUG
  flex: 1,
});
