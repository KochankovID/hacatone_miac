import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from 'router/PrivateRoute';
import { routes } from 'router/routes';
import CardListContainer from './CardListContainer';

const CardListPage = () => {
  const cardListPage = [
    {
      component: CardListContainer,
      path: routes.CARD_LIST,
      exact: true,
    },
  ];
  return (
    <Switch>
      {cardListPage.map((page, i) => (
        <PrivateRoute {...page} key={`CardListPage${i}`} />
      ))}
    </Switch>
  );
};
export default CardListPage;
