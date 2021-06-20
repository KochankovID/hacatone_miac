import { useEffect } from 'react';
import { Switch, useHistory } from 'react-router-dom';
import Pages from 'router/Pages';
import RouteWrapper from 'router/RouteWrapper';
import { enumToArray } from 'helpers';
import { routes } from 'router/routes';
import queryString from 'query-string';

const App = () => {
  const pagePath = enumToArray(routes);
  const history = useHistory();

  const queryParams = queryString.parse(history.location.search);
  const sessionId = sessionStorage.getItem('id');
  console.log(sessionId);
  useEffect(() => {
    // if (
    //   (!sessionId && !queryParams.id) ||
    //   (sessionId === 'undefined' && !queryParams.id)
    // ) {
    //   history.push(routes.ERROR);
    // } else {
    //   history.push(routes.PACIENT_ABNORMAL_INFO);
    //   sessionStorage.setItem('id', String(queryParams.id));
    // }
  }, []);
  return (
    <Switch>
      <RouteWrapper exact path={pagePath}>
        <Pages id={queryParams.id} sessionId={sessionId} />
      </RouteWrapper>
      {/* <RouteWrapper path={['*']} component={NotFoundPage} /> */}
    </Switch>
  );
};

export default App;
