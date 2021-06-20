import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from 'router/PrivateRoute';
import { routes } from 'router/routes';
import ErrorContainer from './ErrorContainer';

const ErrorPage = () => {
  const recomendationPage = [
    {
      component: ErrorContainer,
      path: routes.ERROR,
      exact: true,
    },
  ];
  return (
    <Switch>
      {recomendationPage.map((page, i) => (
        <PrivateRoute {...page} key={`CardListPage${i}`} />
      ))}
    </Switch>
  );
};
export default ErrorPage;
