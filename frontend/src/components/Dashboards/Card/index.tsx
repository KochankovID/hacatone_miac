import './style.css';

const DashboardCard = ({ title, text, type, sis, dis, pulse }: any) => {
  return (
    <div className="dashboard__card">
      <div className="dashboard__card-header">
        <span className="dashboard__card-header__title">{`${title}`}</span>
      </div>
      <div className="dashboard__card-content">
        <p className="dashboard__text">{`Условия: ${type}`}</p>
        <p className="dashboard__text">{`Дата: ${text}`}</p>
      </div>
      {sis && dis && (
        <div className="dashboard__card-content">
          <p className="dashboard__text">{`Систолическое: ${sis}`}</p>
          <p className="dashboard__text">{`Дистолическое: ${dis}`}</p>
        </div>
      )}
      {pulse && (
        <div className="dashboard__card-content">
          <p className="dashboard__text">{`ЧСС: ${pulse}`}</p>
        </div>
      )}
    </div>
  );
};

export default DashboardCard;
