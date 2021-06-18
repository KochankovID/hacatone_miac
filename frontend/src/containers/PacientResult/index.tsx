import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from 'router/PrivateRoute';
import { routes } from 'router/routes';
import PacientResultContainer from './PacientResultContainer';

const PacientResult = () => {
  const pacientResultPage = [
    {
      component: PacientResultContainer,
      path: routes.CARD_LIST,
      exact: true,
    },
  ];
  return (
    <Switch>
      {pacientResultPage.map((page, i) => (
        <PrivateRoute {...page} key={`CardListPage${i}`} />
      ))}
    </Switch>
  );
};
export default PacientResult;
