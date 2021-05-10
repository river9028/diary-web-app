import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { DiaryDetail, Home, Write, Edit, SignIn, SignUp } from './pages';
import * as ROUTES from './constants/routes';
import { useAuthListener } from './hooks';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

function App() {
  const user = useAuthListener();

  return (
    <>
      <Router>
        <IsUserRedirect user={user} loggedInPath={ROUTES.HOME} path={ROUTES.SIGN_IN}>
          <SignIn />
        </IsUserRedirect>

        <IsUserRedirect user={user} loggedInPath={ROUTES.HOME} path={ROUTES.SIGN_UP}>
          <SignUp />
        </IsUserRedirect>

        <ProtectedRoute user={user} path={`${ROUTES.DIARYDETAIL}/:id`}>
          <DiaryDetail />
        </ProtectedRoute>

        <ProtectedRoute user={user} path={`${ROUTES.EDIT}/:id`}>
          <Edit />
        </ProtectedRoute>

        <ProtectedRoute user={user} path={ROUTES.WRITE}>
          <Write />
        </ProtectedRoute>

        <ProtectedRoute user={user} path={ROUTES.HOME}>
          <Home />
        </ProtectedRoute>

        <Redirect to={ROUTES.HOME} />
      </Router>
    </>
  );
}

export default App;
