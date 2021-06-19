import RecomendationForm from 'components/Form/RecomendationForm';
import RecomendationCard from 'components/Recomendation/RecomendationCard';
import './style.css';

const RecomendationContainer = () => {
  return (
    <>
      <div className="recomendation-wrapper">
        <RecomendationCard doctorName="Александр Вавилов" data="11.06.2021" />
        <RecomendationCard doctorName="Александр Вавилов" data="03.05.2021" />
        <RecomendationCard doctorName="Александр Вавилов" data="22.04.2021" />
        <RecomendationCard doctorName="Александр Вавилов" data="15.03.2021" />
      </div>
      <RecomendationForm />
    </>
  );
};

export default RecomendationContainer;
