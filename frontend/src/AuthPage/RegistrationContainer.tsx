import { Button } from 'antd';
import { Formik } from 'formik';
import { Form, Input } from 'formik-antd';
import { Link } from 'react-router-dom';
import './style.css';

const RegistrationContainer = () => {
  const onSubmit = (value: any) => {
    console.log(value);
  };
  return (
    <div className="auth-wrapper">
      <div className="auth-header">
        <div className="auth-header__btn active">
          <button className="auth__btn" type="button">
            Регистрация
          </button>
        </div>
        <div className="auth-header__btn">
          <Link className="auth__link" to="/authorization">
            Авторизация
          </Link>
        </div>
      </div>
      <div className="form-wrapper">
        <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit}>
          <Form>
            <label htmlFor="firstName">Имя</label>
            <Input id="firstName" name="firstName" placeholder="Введите имя" />
            <label htmlFor="lastName">Фамилия</label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Введите фамилию"
            />
            <label htmlFor="email">Email</label>
            <Input id="email" name="email" placeholder="Введите email" />
            <label htmlFor="password">Пароль</label>
            <Input
              id="password"
              name="password"
              placeholder="Введите пароль"
              type="password"
            />
            <Button htmlType="submit" style={{ marginTop: 20 }}>
              Зарегистрироваться
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationContainer;
