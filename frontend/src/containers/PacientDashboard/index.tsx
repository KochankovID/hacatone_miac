import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from 'router/PrivateRoute';
import { routes } from 'router/routes';
import PacientDashboardContainer from './PacientDashboardContainer';

const PacientDashboard = () => {
  const pacientDashboardPage = [
    {
      component: PacientDashboardContainer,
      path: routes.PACIENT_DASHBOARD,
      exact: true,
    },
  ];
  return (
    <Switch>
      {pacientDashboardPage.map((page, i) => (
        <PrivateRoute {...page} key={`CardListPage${i}`} />
      ))}
    </Switch>
  );
};
export default PacientDashboard;
