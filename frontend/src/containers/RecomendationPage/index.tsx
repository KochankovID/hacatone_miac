import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from 'router/PrivateRoute';
import { routes } from 'router/routes';
import RecomendationContainer from './RecomendationContainer';

const RecomendationPage = () => {
  const recomendationPage = [
    {
      component: RecomendationContainer,
      path: routes.RECOMENDATION,
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
export default RecomendationPage;
