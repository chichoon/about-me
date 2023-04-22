import { Dispatch, SetStateAction, useCallback } from 'react';

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
    <menu>
      {tabNames.map(
        (tabName, index) =>
          tabName && (
            <li key={`description-tab-${index}`}>
              <button type='button' onClick={handleClickTab(index)}>
                {tabName}
              </button>
            </li>
          )
      )}
    </menu>
  );
};
