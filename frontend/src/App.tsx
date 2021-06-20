import { useEffect } from 'react';
import { Switch, useHistory } from 'react-router-dom';
import Pages from 'router/Pages';
import RouteWrapper from 'router/RouteWrapper';
import { enumToArray } from 'helpers';
import { routes } from 'router/routes';
import queryString from 'query-string';
import { useDispatch } from 'react-redux';
import { getPatientInfoAction } from 'store/PacientDashboard/actions';

const App = () => {
  const dispatch = useDispatch();
  const pagePath = enumToArray(routes);
  const history = useHistory();
  const queryParams = queryString.parse(history.location.search);
  const sessionId = sessionStorage.getItem('id');

  useEffect(() => {
    if (
      (!sessionId && !queryParams.id) ||
      (sessionId === 'undefined' && !queryParams.id)
    ) {
      history.push(routes.ERROR);
    } else if (queryParams.id) {
      history.push(routes.PACIENT_ABNORMAL_INFO);
      dispatch(getPatientInfoAction(Number(queryParams.id)));
      sessionStorage.setItem('id', String(queryParams.id));
    } else {
      dispatch(getPatientInfoAction(Number(sessionStorage.getItem('id'))));
      history.push(routes.PACIENT_ABNORMAL_INFO);
    }
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
