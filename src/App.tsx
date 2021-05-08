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
        <Switch>
          <IsUserRedirect user={user} loggedInPath={ROUTES.HOME} path={ROUTES.SIGN_IN}>
            <SignIn />
          </IsUserRedirect>
          <IsUserRedirect user={user} loggedInPath={ROUTES.HOME} path={ROUTES.SIGN_UP}>
            <SignUp />
          </IsUserRedirect>

          <Route exact path={`${ROUTES.DIARYDETAIL}/:id`}>
            <DiaryDetail />
          </Route>
          <Route exact path={`${ROUTES.EDIT}/:id`}>
            <Edit />
          </Route>
          <Route exact path={ROUTES.WRITE}>
            <Write />
          </Route>
          <Route exact path={ROUTES.HOME}>
            <Home />
          </Route>
          <Redirect to={ROUTES.HOME} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
