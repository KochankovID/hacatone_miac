import AuthPage from 'AuthPage';
import CardListPage from 'containers/CardListPage';
import PacientDashboard from 'containers/PacientDashboard';
import PacientInfo from 'containers/PacientInfo';
import { useSelector } from 'react-redux';
import { getUserToken } from 'store/AuthData/selectors';
import PageWrapper from '../components/wrappers/PageWrapper';

const Pages = () => {
  return (
    <>
      <PageWrapper>
        <PacientInfo />
        <CardListPage />
        <PacientDashboard />
      </PageWrapper>

      <AuthPage />
    </>
  );
};

export default Pages;
