import { Button } from 'antd';
import axios from 'axios';
import { Formik } from 'formik';
import { Form, Input } from 'formik-antd';
import { TokenStorage } from 'helpers/token-storage';
import { Link } from 'react-router-dom';
import './style.css';

const AuthContainer = () => {
  const onSubmit = (value: any) => {
    console.log(value);
    axios
      .post('http://127.0.0.1:1883/api/auth/login/', value)
      .then((res) => {
        console.log(res.data);
        TokenStorage.storeToken(res.data.data.accessToken);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const onClick = () => {
    axios
      .get('https://api.dev.hibrain.ladcloud.ru/api/auth/jwt/permissions', {
        headers: 'A',
      })
      .then((res) => {
        console.log(res.data);
        // TokenStorage.storeToken(res.data.data.accessToken);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="auth-wrapper">
      <div className="auth-header">
        <div className="auth-header__btn">
          <Link className="auth__link" to="/registration">
            Регистрация
          </Link>
        </div>
        <div className="auth-header__btn active">
          <button className="auth__btn" type="button">
            Авторизация
          </button>
        </div>
      </div>
      <div className="form-wrapper">
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={onSubmit}
        >
          <Form>
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              name="username"
              placeholder="Введите email"
              aria-label="Email"
            />
            <label htmlFor="password">Пароль</label>
            <Input
              id="password"
              name="password"
              placeholder="Введите пароль"
              type="password"
              size="middle"
            />
            <Button htmlType="submit" style={{ marginTop: 20 }}>
              Войти
            </Button>
            <Button
              htmlType="button"
              style={{ marginTop: 20 }}
              onClick={onClick}
            >
              Проверка рефреша
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AuthContainer;
