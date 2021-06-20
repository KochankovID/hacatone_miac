import MainMenu from '../MainMenu';
import './style.css';
import logo from './photo_2021-06-19_14-47-01.jpg';

const PageWrapper = (props: any) => {
  const { children } = props;

  return (
    <div className="page">
      <header className="header">
        <div className="header__container">
          <div className="logo" />
          <div className="header__menu">
            <img width="100%" src={logo} alt="logo" />
          </div>
        </div>
      </header>
      <MainMenu />
      <div className="container">
        <div className="page__content">
          <div className="page__layout">
            <div className="main__content">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageWrapper;
