import AuthPage from 'AuthPage';
import CardListPage from 'containers/CardListPage';
import PacientDashboard from 'containers/PacientDashboard';
import PacientInfo from 'containers/PacientInfo';
import RecomendationPage from 'containers/RecomendationPage';
import PageWrapper from '../components/wrappers/PageWrapper';

const Pages = () => {
  return (
    <>
      <PageWrapper>
        <PacientInfo />
        <CardListPage />
        <PacientDashboard />
        <RecomendationPage />
      </PageWrapper>

      <AuthPage />
    </>
  );
};

export default Pages;
