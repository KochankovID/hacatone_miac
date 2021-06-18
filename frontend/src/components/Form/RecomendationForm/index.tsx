import { Button } from 'antd';
import { Formik } from 'formik';
import { Form, Input } from 'formik-antd';
import { Link } from 'react-router-dom';
import './style.css';

const RecomendationForm = () => {
  const onSubmit = (value: any) => {
    console.log(value);
  };
  return (
    <div className="auth-wrapper">
      <div className="form-wrapper">
        <Formik
          initialValues={{ recomend: '', password: '' }}
          onSubmit={onSubmit}
        >
          <Form>
            <label htmlFor="firstName">Сообщение</label>
            <Input.TextArea
              id="recomend"
              name="firstName"
              placeholder="Введите сообщение"
            />
            <label htmlFor="lastName">Имя доктора</label>
            <Input id="lastName" name="lastName" placeholder="Введите имя" />

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
