import React from 'react';
import { FaRegCalendarAlt, FaPen } from 'react-icons/fa';
import { useHistory } from 'react-router';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';

const HeaderContainer = () => {
  const history = useHistory();
  return (
    <>
      <Header>
        <Header.Group handleClick={() => undefined}>
          <FaRegCalendarAlt />
        </Header.Group>
        <Header.Group
          handleClick={() => {
            history.push(ROUTES.HOME);
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
    </>
  );
};
export default HeaderContainer;
