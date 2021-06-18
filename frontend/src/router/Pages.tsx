import AuthPage from 'AuthPage';
import CardListPage from 'containers/CardListPage';
import myHistory from 'myHistory';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUserToken } from 'store/AuthData/selectors';
import PageWrapper from '../components/wrappers/PageWrapper';
import { routes } from './routes';

const Pages = () => {
  const token = useSelector(getUserToken);
  return (
    <>
      {token && (
        <PageWrapper>
          <CardListPage />
        </PageWrapper>
      )}
      {!token && <AuthPage />}
    </>
  );
};

export default Pages;
