import { Dispatch, SetStateAction, useCallback } from 'react';
import { css } from '@emotion/react';
import { COLORS } from '@/styles/colors';
import { SIZES } from '@/styles/sizes';

interface Props {
  selectedTabIndex: number;
  setSelectedTabIndex: Dispatch<SetStateAction<number>>;
  tabNames: (string | undefined)[];
}

export const DescriptionSelectTab = ({ selectedTabIndex, setSelectedTabIndex, tabNames }: Props) => {
  const handleClickTab = useCallback(
    function handleClickTabCallback(clickedIndex: number) {
      return () => setSelectedTabIndex(clickedIndex);
    },
    [setSelectedTabIndex]
  );

  return (
    <menu css={tabListWrapperStyle}>
      {tabNames.map(
        (tabName, index) =>
          tabName && (
            <li key={`description-tab-${index}`} css={tabListElementWrapperStyle}>
              <button
                type='button'
                onClick={handleClickTab(index)}
                css={tabListButtonWrapperStyle(index === selectedTabIndex)}
              >
                <span>{tabName}</span>
              </button>
            </li>
          )
      )}
    </menu>
  );
};

const tabListWrapperStyle = css({
  borderTop: `1px solid ${COLORS.GRAYA}`,
  padding: '10px 0',
  display: 'flex',
  flexDirection: 'row',
});

const tabListElementWrapperStyle = css({
  borderRight: `1px solid ${COLORS.GRAYA}`,

  ':last-child': {
    borderRight: 'none',
  },
});

const tabListButtonWrapperStyle = (isSelected: boolean) =>
  css({
    padding: '5px 10px',

    span: {
      fontSize: SIZES.FONT_L,
      color: isSelected ? COLORS.GRAY3 : COLORS.GRAYA,
      transition: 'color 0.2s ease-in',
    },
  });
