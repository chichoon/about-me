import { Dispatch, SetStateAction, createContext } from 'react';

interface ContextType {
  selectedProjectKey: string | null;
  setSelectedProjectKey: Dispatch<SetStateAction<string | null>>;
}

export const SelectedProjectKeyContext = createContext<ContextType>({
  selectedProjectKey: null,
  setSelectedProjectKey: () => {},
});
