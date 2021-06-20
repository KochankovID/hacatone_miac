import { parseDate } from 'helpers';
import './style.css';

const PacientResultCard = ({ title, measurementsData }: any) => {
  return (
    <div className="pacient-info__card">
      <div className="pacient-info__card-header">
        <span className="pacient-info__card-header__title">{title}</span>
      </div>
      <div className="pacient-info__card-content">
        <div className="card-content_header">
          <p className="text__title">Диастолическое давление</p>
          <p className="text__title">Cистолическое давление</p>
          <p className="text__title">Пульс</p>
          <p className="text__title">Тип</p>
          <p className="text__title">Дата</p>
        </div>
        {measurementsData.map((el: any) => (
          <div className="card__text">
            <p className="text__content">{el.pressure_low}</p>
            <p className="text__content">{el.pressure_high}</p>
            <p className="text__content">{el.pulse}</p>
            <p className="text__content">{el.type}</p>
            <p className="text__content">{parseDate(el.created_at)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PacientResultCard;
