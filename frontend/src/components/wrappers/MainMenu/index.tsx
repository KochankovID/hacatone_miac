import { Menu } from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import './style.css';
import { Link } from 'react-router-dom';
import { routes } from 'router/routes';

const MainMenu = () => {
  return (
    <div className="sidebar">
      <Menu mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/pacient-info"> Информация о пациенте</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UploadOutlined />}>
          <Link to={routes.PACIENT_DASHBOARD}> Графики</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<VideoCameraOutlined />}>
          <Link to={routes.RECOMENDATION}> Рекомендации</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          nav 4
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default MainMenu;
