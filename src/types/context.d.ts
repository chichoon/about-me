import { Dispatch, SetStateAction } from 'react';

export interface SelectedProjectKeyContextType {
  selectedProjectKey: string | null;
  setSelectedProjectKey: Dispatch<SetStateAction<string | null>>;
}
