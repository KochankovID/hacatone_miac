import './style.css';

const PacientResultCard = () => {
  return (
    <div className="pacient-info__card">
      <div className="pacient-info__card-header">
        <span className="pacient-info__card-header__title">
          Информация о пациенте
        </span>
      </div>
      <div className="pacient-info__card-content">
        <div className="card__firstname">
          <p>Имя</p>
          <p>Анатолий</p>
        </div>
        <div className="card__lastname">
          <p>Фамилия</p>
          <p>Стольник</p>
        </div>
        <div className="card__age">
          <p>Дата рождения</p>
          <p>23.09.1967</p>
        </div>
      </div>
    </div>
  );
};

export default PacientResultCard;
