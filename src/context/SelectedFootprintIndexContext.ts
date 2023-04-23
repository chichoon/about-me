import { createContext, Dispatch, SetStateAction } from 'react';

interface ContextType {
  selectedFootprintIndex: number;
  setSelectedFootprintIndex: Dispatch<SetStateAction<number>>;
}

export const SelectedFootprintIndexContext = createContext<ContextType>({
  selectedFootprintIndex: -1,
  setSelectedFootprintIndex: () => {},
});
