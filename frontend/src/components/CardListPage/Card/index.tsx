import './style.css';

const Card = () => {
  return (
    <div className="card">
      <div className="card__text">
        <span>Имя</span>
      </div>
      <div className="card__text">
        <span>Дата</span>
      </div>
      <div className="card__text">
        <span>Еще что-то</span>
      </div>
    </div>
  );
};

export default Card;
