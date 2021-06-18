import './style.css';

const PacientResultHeader = ({ children }: any) => {
  return (
    <>
      <div className="pacient-info__header">
        <h2>Пациент: Анатолий Стольник</h2>
      </div>
      <div className="pacient-info__content">{children}</div>
    </>
  );
};

export default PacientResultHeader;
