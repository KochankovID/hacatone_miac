import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...props }: any) => {
  return (
    <Route
      {...props}
      render={(routeRenderProps) => <Component {...routeRenderProps} />}
    />
  );
};

export default PrivateRoute;
