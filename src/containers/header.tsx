import React, { useState } from 'react';
import { FaRegCalendarAlt, FaPen } from 'react-icons/fa';
import { useHistory } from 'react-router';
import { Header, DatePicker, TagPicker } from '../components';
import * as ROUTES from '../constants/routes';

const HeaderContainer = () => {
  const history = useHistory();
  const [showDatePicker, setShowDatePicker] = useState(false);
  return (
    <>
      <Header>
        <Header.Group handleClick={() => setShowDatePicker((prev) => !prev)}>
          <FaRegCalendarAlt />
        </Header.Group>
        <Header.Group
          handleClick={() => {
            history.push(ROUTES.HOME);
            history.go(0);
          }}
        >
          Diary
        </Header.Group>
        <Header.Group
          handleClick={() => {
            history.push(ROUTES.WRITE);
          }}
        >
          <FaPen />
        </Header.Group>
      </Header>

      <DatePicker showDatePicker={showDatePicker} />

      <TagPicker showDatePicker={showDatePicker} />
    </>
  );
};
export default HeaderContainer;
