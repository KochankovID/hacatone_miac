import PacientDashbordsContent from 'components/PacientDashboard/PacientDashbordsContent';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMeasurmentsAction } from 'store/PacientDashboard/actions';
import { getMeasurements } from 'store/PacientDashboard/selectors';

const PacientDashboardContainer = () => {
  const dispatch = useDispatch();
  const measurementsData = useSelector(getMeasurements);
  useEffect(() => {
    dispatch(getMeasurmentsAction(Number(sessionStorage.getItem('id'))));
  }, []);
  return <PacientDashbordsContent data={measurementsData} />;
};

export default PacientDashboardContainer;
