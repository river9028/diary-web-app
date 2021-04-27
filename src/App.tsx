import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { DiaryDetail, Home, Write, Edit } from './pages';
import * as ROUTES from './constants/routes';

function App() {
  return (
    <>
      <Router>
        <Switch>
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
