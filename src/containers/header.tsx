import React, { useContext, useState } from 'react';
import { FaRegCalendarAlt, FaPen } from 'react-icons/fa';
import { useHistory } from 'react-router';
import { Header, DatePicker, TagPicker } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context';

const HeaderContainer = () => {
  const history = useHistory();
  // console.log('history.location', history.location.pathname);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase?.auth().currentUser;
  if (user) {
    console.log(user.displayName);
  }
  return (
    <>
      <Header>
        <Header.Group handleClick={() => setShowDatePicker((prev) => !prev)}>
          <FaRegCalendarAlt />
        </Header.Group>
        <Header.Group
          handleClick={() => {
            if (history.location.pathname === ROUTES.HOME) {
              history.go(0);
            } else {
              history.push(ROUTES.HOME);
            }
          }}
        >
          {`${user?.displayName ? `${user?.displayName}'s Diary` : ''}`}
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
