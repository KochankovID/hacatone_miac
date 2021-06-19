import { Menu } from 'antd';
import {
  BarChartOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import './style.css';
import { Link } from 'react-router-dom';
import { routes } from 'router/routes';
import SubMenu from 'antd/lib/menu/SubMenu';

const MainMenu = () => {
  return (
    <div className="sidebar">
      <Menu mode="inline" defaultSelectedKeys={['4']}>
        {/* <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/pacient-info"> Информация о пациенте</Link>
        </Menu.Item> */}
        {/* <Menu.Item key="2" icon={<UploadOutlined /> } title="Диаграммы показаний"> */}
        <SubMenu
          key="sub1"
          icon={<BarChartOutlined />}
          title="Информация о пациенте"
        >
          <Menu.Item key="1">
            <Link to="/pacient-info"> Аномальные показания</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/pacient-info"> Все показания</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          icon={<BarChartOutlined />}
          title="Диаграммы показаний"
        >
          <Menu.Item key="5">
            <Link to={routes.NOT_GOOD_DASHBOARD}> Аномальные показания</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to={routes.PACIENT_DASHBOARD}> Все показания</Link>
          </Menu.Item>
        </SubMenu>
        {/* <Link to={routes.PACIENT_DASHBOARD}> Графики</Link> */}
        {/* </Menu.Item> */}
        <Menu.Item key="3" icon={<VideoCameraOutlined />}>
          <Link to={routes.RECOMENDATION}> Рекомендации</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default MainMenu;
