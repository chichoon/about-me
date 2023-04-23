import { createContext, Dispatch, SetStateAction } from 'react';

interface ContextType {
  selectedFootprintIndex: number | null;
  setSelectedFootprintIndex: Dispatch<SetStateAction<string | null>>;
}

export const SelectedFootprintIndexContext = createContext<ContextType>({
  selectedFootprintIndex: null,
  setSelectedFootprintIndex: () => {},
});
