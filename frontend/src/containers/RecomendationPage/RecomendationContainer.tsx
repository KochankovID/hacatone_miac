import RecomendationForm from 'components/Form/RecomendationForm';
import RecomendationCard from 'components/Recomendation/RecomendationCard';
import { parseDate } from 'helpers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecomendationAction } from 'store/RecomendationData/actions';
import { getRecomendations } from 'store/RecomendationData/selectors';
import './style.css';

const RecomendationContainer = () => {
  const dispatch = useDispatch();
  const recomendationData = useSelector(getRecomendations);
  useEffect(() => {
    dispatch(getRecomendationAction(1));
  }, []);
  return (
    <>
      <div className="recomendation-wrapper">
        {recomendationData.map((el: any) => (
          <RecomendationCard
            content={el.text}
            doctorName={el.doctor}
            data={parseDate(el.created_at)}
          />
        ))}
      </div>
      <RecomendationForm />
    </>
  );
};

export default RecomendationContainer;
