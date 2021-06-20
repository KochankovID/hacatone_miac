import PacientResultCard from 'components/PacientResult/PacientResultCard';
import PacientResultContent from 'components/PacientResult/PacientResultContent';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMeasurmentsAction } from 'store/PacientDashboard/actions';
import { getMeasurements } from 'store/PacientDashboard/selectors';

const PacientInfoContainer = () => {
  const dispatch = useDispatch();
  const measurementsData = useSelector(getMeasurements);
  useEffect(() => {
    dispatch(getMeasurmentsAction(140));
  }, []);
  return (
    <PacientResultContent>
      <PacientResultCard
        measurementsData={measurementsData}
        title="Предыдущие показания"
      />
    </PacientResultContent>
  );
};

export default PacientInfoContainer;
