import React, { useContext, useState } from 'react';
import { Cards, Header } from '../containers';
import { DatePickerContext } from '../context';

const Home = () => {
  const [startDate, setStartDate] = useState(
    new Date(new Date(new Date().setFullYear(new Date().getFullYear() - 1)).setHours(0, 0, 0)),
  );
  const [endDate, setEndDate] = useState(new Date(new Date().setHours(23, 59, 59)));

  return (
    <DatePickerContext.Provider value={{ startDate, setStartDate, endDate, setEndDate }}>
      <Header />

      <Cards />
    </DatePickerContext.Provider>
  );
};

export default Home;
