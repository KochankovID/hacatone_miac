import React, { useEffect } from 'react';
import { Switch, useHistory } from 'react-router-dom';
import Pages from 'router/Pages';
import RouteWrapper from 'router/RouteWrapper';
import { enumToArray } from 'helpers';
import { routes } from 'router/routes';
import refreshToken from 'services/refreshToken';
import { useSelector } from 'react-redux';
import { getUserToken } from 'store/AuthData/selectors';
import myHistory from 'myHistory';
// import 'assets/scss/main.scss';
// import 'assets/scss/normalize.scss';

const App = () => {
  const pagePath = enumToArray(routes);
  const history = useHistory();
  const token = useSelector(getUserToken);
  useEffect(() => {
    if (!token) {
      history.push(routes.AUTH);
    }
  }, []);
  refreshToken();
  return (
    <Switch>
      <RouteWrapper exact path={pagePath}>
        <Pages />
      </RouteWrapper>
      {/* <RouteWrapper path={['*']} component={NotFoundPage} /> */}
    </Switch>
  );
};

export default App;
