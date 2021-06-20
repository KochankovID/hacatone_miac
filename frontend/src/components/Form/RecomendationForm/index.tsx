import { Button } from 'antd';
import { Formik } from 'formik';
import { Form, Input } from 'formik-antd';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { postRecomendationAction } from 'store/RecomendationData/actions';
import './style.css';

const RecomendationForm = () => {
  const dispatch = useDispatch();
  const onSubmit = (value: any) => {
    dispatch(
      postRecomendationAction({
        ...value,
        patient: Number(sessionStorage.getItem('id')),
      })
    );
    console.log(value);
  };
  return (
    <div className="auth-wrapper">
      <div className="form-wrapper">
        <Formik initialValues={{ text: '', doctor: '' }} onSubmit={onSubmit}>
          <Form>
            <label htmlFor="text">Сообщение</label>
            <Input.TextArea
              id="recomend"
              name="text"
              placeholder="Введите сообщение"
            />
            <label htmlFor="doctor">Имя доктора</label>
            <Input id="doctor" name="doctor" placeholder="Введите имя" />

            <Button htmlType="submit" style={{ marginTop: 20 }}>
              Отправить
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RecomendationForm;
