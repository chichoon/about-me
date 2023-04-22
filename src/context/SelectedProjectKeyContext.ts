import { createContext, Dispatch, SetStateAction } from 'react';

export interface ContextType {
  selectedProjectKey: string | null;
  setSelectedProjectKey: Dispatch<SetStateAction<string | null>>;
}

export const SelectedProjectKeyContext = createContext<ContextType>({
  selectedProjectKey: null,
  setSelectedProjectKey: () => {},
});
