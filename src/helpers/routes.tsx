import React from 'react';
import firebase from 'firebase';
import { Route, Redirect } from 'react-router-dom';

type RoutesPropsType = {
  user: firebase.User | null;
  path: string;
  loggedInPath?: string;
};
export const IsUserRedirect: React.FC<RoutesPropsType> = ({ user, loggedInPath, children, ...rest }) => {
  return (
    <Route
      exact
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return <Redirect to={{ pathname: loggedInPath }} />;
        }

        return null;
      }}
    />
  );
};

export const ProtectedRoute: React.FC<RoutesPropsType> = ({ user, children, ...rest }) => {
  return (
    <Route
      exact
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: 'signin',
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
};
