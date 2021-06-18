import MainMenu from '../MainMenu';
import './style.css';

const PageWrapper = (props: any) => {
  const { children } = props;

  return (
    <div className="page">
      <header className="header">
        <div className="header__container">
          <div className="logo" />
          <div className="header__menu" />
        </div>
      </header>
      <div className="container">
        <div className="page__content">
          <div className="page__layout">
            <MainMenu />
            <div className="main__content">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageWrapper;
