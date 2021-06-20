import './style.css';

const RecomendationCard = ({ doctorName, data, content }: any) => {
  return (
    <div className="recomendation__card">
      <div className="recomendation__card-header">
        <span className="recomendation__card-header__title">
          {`Врач: ${doctorName}`}
        </span>
        <span className="recomendation__card-header__data">{data}</span>
      </div>
      <div className="recomendation__card-content">
        <p className="recomendation__text">{content}</p>
      </div>
    </div>
  );
};

export default RecomendationCard;
