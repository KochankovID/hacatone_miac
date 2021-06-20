import PacientResultCard from 'components/PacientResult/PacientResultCard';
import PacientResultContent from 'components/PacientResult/PacientResultContent';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMeasurmentsAction } from 'store/PacientDashboard/actions';
import { getMeasurements } from 'store/PacientDashboard/selectors';

const PacientBadInfoContainer = () => {
  const dispatch = useDispatch();
  const measurementsData = useSelector(getMeasurements)
    .filter(
      (el: any) =>
        el.pressure_high > 130 ||
        el.pressure_high < 110 ||
        el.pressure_low < 70 ||
        el.pressure_low > 85 ||
        el.pulse > 80 ||
        el.pulse < 60 ||
        el.saturation < 95
    )
    .sort((a: any, b: any) => {
      const bDate: any = new Date(b.created_at);
      const aDate: any = new Date(a.created_at);
      return bDate - aDate;
    });
  useEffect(() => {
    dispatch(getMeasurmentsAction(Number(sessionStorage.getItem('id'))));
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

export default PacientBadInfoContainer;
