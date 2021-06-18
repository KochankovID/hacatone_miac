import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from 'router/PrivateRoute';
import { routes } from 'router/routes';
import AuthContainer from './AuthContainer';
import RegistrationContainer from './RegistrationContainer';

const AuthPage = () => {
  const authPage = [
    {
      component: AuthContainer,
      path: routes.AUTH,
      exact: true,
    },
    {
      component: RegistrationContainer,
      path: routes.REGISTRATION,
      exact: true,
    },
  ];
  return (
    <Switch>
      {authPage.map((page, i) => (
        <PrivateRoute {...page} key={`AuthPage${i}`} />
      ))}
    </Switch>
  );
};
export default AuthPage;
