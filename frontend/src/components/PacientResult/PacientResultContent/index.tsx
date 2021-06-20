import { useSelector } from 'react-redux';
import { getPatientInfo } from 'store/PacientDashboard/selectors';
import './style.css';

const PacientResultHeader = ({ children }: any) => {
  const patientInfo = useSelector(getPatientInfo);
  return (
    <>
      <div className="pacient-info__header">
        <h2>{`Пациент: ${patientInfo.first_name} ${patientInfo.last_name}`}</h2>
      </div>
      <div className="pacient-info__content">{children}</div>
    </>
  );
};

export default PacientResultHeader;
