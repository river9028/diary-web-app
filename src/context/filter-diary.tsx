import { createContext } from 'react';
import Firebase from 'firebase/app';

export const FilterDiaryContext = createContext<{
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  endDate: Date;
  setEndDate: React.Dispatch<React.SetStateAction<Date>>;
  selectTags: string[];
  setSelectTags: React.Dispatch<React.SetStateAction<string[]>>;
}>({
  startDate: new Date(),
  setStartDate: () => null,
  endDate: new Date(),
  setEndDate: () => null,
  selectTags: [],
  setSelectTags: () => null,
});
