import { useEffect, useMemo, useState } from 'react';
import { css } from '@emotion/react';

import { useGetScreenSize } from '@/hooks';
import { SelectedFootprintIndexContext } from '@/context';
import { FootprintType } from '@/types/profileData';
import { FootprintListMenu } from './FootprintListMenu';
import { FootprintPage } from '../FootprintPage';

import { getMinBreakpoint } from '@/styles/getResponsiveBreakpoint';
import { COLORS } from '@/styles/colors';

interface Props {
  footprintData: FootprintType[];
}

export const FootprintsPage = ({ footprintData }: Props) => {
  const [selectedFootprintIndex, setSelectedFootprintIndex] = useState<number>(-1);
  const { windowWidth } = useGetScreenSize();

  const value = useMemo(
    () => ({ selectedFootprintIndex, setSelectedFootprintIndex }),
    [selectedFootprintIndex, setSelectedFootprintIndex]
  );

  useEffect(() => {
    return () => {
      setSelectedFootprintIndex(-1);
    };
  }, []);

  return windowWidth <= getMinBreakpoint('LD') ? (
    <FootprintListMenu footprintData={footprintData} />
  ) : (
    <div css={footprintPageWrapperStyle}>
      <SelectedFootprintIndexContext.Provider value={value}>
        <FootprintListMenu footprintData={footprintData} />
        {selectedFootprintIndex >= 0 && (
          <div css={footprintPageSideSectionStyle}>
            <FootprintPage footprint={footprintData[selectedFootprintIndex]} />
          </div>
        )}
      </SelectedFootprintIndexContext.Provider>
    </div>
  );
};

const footprintPageWrapperStyle = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
});

const footprintPageSideSectionStyle = css({
  flex: 1,
  maxWidth: 'calc(100% - 420px)',
  minHeight: '100%',
  overflow: 'scroll',
  borderLeft: `2px solid ${COLORS.GRAYC}`,
  padding: 25,
});
