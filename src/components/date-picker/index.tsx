import React, { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Container, Wrapper } from './styles/date-picker';

import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerContext } from '../../context';

const DatePickerComponent: React.FC<{ showDatePicker: boolean }> = ({
  showDatePicker,
  children,
  ...restProps
}) => {
  const { startDate, setStartDate, endDate, setEndDate } = useContext(DatePickerContext);

  return (
    <Wrapper showDatePicker={showDatePicker}>
      <Container showDatePicker={showDatePicker} {...restProps}>
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <DatePicker
          selected={endDate}
          onChange={(date: Date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
        {children}
      </Container>
    </Wrapper>
  );
};

export default DatePickerComponent;
