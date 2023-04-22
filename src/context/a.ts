import { createContext } from 'react';

import { SelectedProjectKeyContextType } from '@/types/context';

export const SelectedProjectKeyContext = createContext<SelectedProjectKeyContextType>({
  selectedProjectKey: null,
  setSelectedProjectKey: () => {},
});
