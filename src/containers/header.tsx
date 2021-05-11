import React, { useContext, useState } from 'react';
import { FaRegCalendarAlt, FaPen } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
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
        <Header.Group>
          <FaRegCalendarAlt onClick={() => setShowDatePicker((prev) => !prev)} />
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
            firebase?.auth().signOut();
          }}
        >
          <FiLogOut />
        </Header.Group>
      </Header>

      <DatePicker showDatePicker={showDatePicker} />

      <TagPicker showDatePicker={showDatePicker} />

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            position: 'fixed',
            maxWidth: '800px',
            width: 'calc(100vw - 60px)',
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9,
            bottom: 0,
          }}
        >
          <button
            type='button'
            onClick={() => {
              history.push(ROUTES.WRITE);
            }}
            style={{
              margin: '10px',
              position: 'absolute',
              bottom: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '60px',
              height: '60px',
              background: 'black',
              color: 'white',
              fontSize: '1.414rem',
              borderRadius: '50%',
              border: 0,
            }}
          >
            <FaPen />
          </button>
        </div>
      </div>
    </>
  );
};
export default HeaderContainer;
