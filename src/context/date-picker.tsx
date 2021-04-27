import { createContext } from 'react';
import Firebase from 'firebase/app';

export const DatePickerContext = createContext<{
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  endDate: Date;
  setEndDate: React.Dispatch<React.SetStateAction<Date>>;
}>({ startDate: new Date(), setStartDate: () => null, endDate: new Date(), setEndDate: () => null });
