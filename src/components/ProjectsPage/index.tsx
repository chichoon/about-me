import { useEffect, useMemo, useState } from 'react';
import { css } from '@emotion/react';

import { ProjectType } from '@/types/profileData';
import { SelectedProjectKeyContext } from '@/context';
import { useGetScreenResizeEvent } from '@/hooks';
import { ProjectListMenu } from './ProjectListMenu';

import { getMinBreakpoint } from '@/styles/getResponsiveBreakpoint';

interface Props {
  projectsData: ProjectType[];
}

export const ProjectsPage = ({ projectsData }: Props) => {
  const [selectedProjectKey, setSelectedProjectKey] = useState<string | null>(null);
  const { windowWidth } = useGetScreenResizeEvent();

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
    <ProjectListMenu projectsData={projectsData} />
  ) : (
    <div css={projectPageWrapperStyle}>
      <SelectedProjectKeyContext.Provider value={value}>
        <ProjectListMenu projectsData={projectsData} />
        {selectedProjectKey && <div css={projectPageSideSectionStyle}>하이 ㅋㅋ</div>}
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
