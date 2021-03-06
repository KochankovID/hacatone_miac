import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from 'router/PrivateRoute';
import { routes } from 'router/routes';
import PacientBadInfoContainer from './PacientBadInfoContainer';
import PacientInfoContainer from './PacientInfoContainer';

const PacientInfo = () => {
  const pacientInfoPage = [
    {
      component: PacientInfoContainer,
      path: routes.PACIENT_INFO,
      exact: true,
    },
    {
      component: PacientBadInfoContainer,
      path: routes.PACIENT_ABNORMAL_INFO,
      exact: true,
    },
  ];
  return (
    <Switch>
      {pacientInfoPage.map((page, i) => (
        <PrivateRoute {...page} key={`CardListPage${i}`} />
      ))}
    </Switch>
  );
};
export default PacientInfo;
