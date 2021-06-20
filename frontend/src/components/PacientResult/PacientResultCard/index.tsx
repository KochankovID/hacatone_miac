import DateRange from 'components/Dashboards/DateRange';
import { parseDate } from 'helpers';
import './style.css';

const PacientResultCard = ({ title, measurementsData }: any) => {
  return (
    <div className="pacient-info__card">
      <div className="pacient-info__card-header">
        <span className="pacient-info__card-header__title">{title}</span>
      </div>
      <div className="dashboards__date-picker">
        <h3 className="dashboards__date-picker__title">Выберете период</h3>
        <div className="dashboards__date-picker__wrapper">
          <DateRange />
        </div>
      </div>
      <div className="pacient-info__card-content">
        <div className="card__text">
          <p className="text__title">Диастолическое давление</p>
          <p className="text__title">Cистолическое давление</p>
          <p className="text__title">Пульс</p>
          <p className="text__title">Сатурация</p>
          <p className="text__title">Тип</p>
          <p className="text__title">Дата</p>
        </div>
        {measurementsData.map((el: any) => (
          <div className="card__text">
            <p className="text__content">{el.pressure_low}</p>
            <p className="text__content">{el.pressure_high}</p>
            <p className="text__content">{el.pulse}</p>
            <p className="text__content">{el.saturation}</p>
            <p className="text__content">{el.type}</p>
            <p className="text__content">{parseDate(el.created_at)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PacientResultCard;
