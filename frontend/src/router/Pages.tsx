import AuthPage from 'AuthPage';
import CardListPage from 'containers/CardListPage';
import ErrorPage from 'containers/ErrorPage';
import PacientDashboard from 'containers/PacientDashboard';
import PacientInfo from 'containers/PacientInfo';
import RecomendationPage from 'containers/RecomendationPage';
import PageWrapper from '../components/wrappers/PageWrapper';

const Pages = ({ id, sessionId }: any) => {
  return (
    <>
      {id ||
        (sessionId && (
          <PageWrapper>
            <PacientInfo />
            <CardListPage />
            <PacientDashboard />
            <RecomendationPage />
          </PageWrapper>
        ))}
      {!id && !sessionId && <ErrorPage />}
      <AuthPage />
    </>
  );
};

export default Pages;
