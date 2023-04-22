import { useEffect, useMemo, useState } from 'react';
import { css } from '@emotion/react';

import { ProjectListType } from '@/types/profileData';
import { SelectedProjectKeyContext } from '@/context';
import { useGetScreenSize } from '@/hooks';
import { ProjectListMenu } from './ProjectListMenu';
import { ProjectPage } from '../ProjectPage';

import { getMinBreakpoint } from '@/styles/getResponsiveBreakpoint';
import { COLORS } from '@/styles/colors';

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
  flex: 1,
  maxWidth: 'calc(100% - 420px)',
  minHeight: '100%',
  overflow: 'scroll',
  boxShadow: `inset 0 0 10px 5px ${COLORS.GRAYC}`,
  padding: 25,
});
