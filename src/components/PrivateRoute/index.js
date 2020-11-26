import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../../contexts/auth';

function PrivateRoute({
  component: Component,
  ...rest
}) {
  const auth = useAuth();

  return (
    auth && (
      <Route
        {...rest}
        render={props =>
          auth.user ? (
            <Component {...props} />
          ) : (
              <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )
        }
      />
    )
  );
}

export default PrivateRoute;