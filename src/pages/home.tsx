import React, { useContext, useState } from 'react';
import { Cards, Header } from '../containers';
import { FilterDiaryContext } from '../context';

const Home = () => {
  const [startDate, setStartDate] = useState(
    new Date(new Date(new Date().setFullYear(new Date().getFullYear() - 1)).setHours(0, 0, 0)),
  );
  const [endDate, setEndDate] = useState(new Date(new Date().setHours(23, 59, 59)));
  const [selectTags, setSelectTags] = useState([] as string[]);
  return (
    <FilterDiaryContext.Provider
      value={{ startDate, setStartDate, endDate, setEndDate, selectTags, setSelectTags }}
    >
      <Header />

      <Cards />
    </FilterDiaryContext.Provider>
  );
};

export default Home;
