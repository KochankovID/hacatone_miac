import CardListPage from 'containers/CardListPage';
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
      </PageWrapper>

      {/* <AuthPage /> */}
    </>
  );
};

export default Pages;
