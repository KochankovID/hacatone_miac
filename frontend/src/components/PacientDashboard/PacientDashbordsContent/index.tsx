import BarChart from 'components/Dashboards/BarChart';
import './style.css';

const PacientDashbordsContent = ({ children }: any) => {
  const data = [
    { name: '21.03.21', value: 156 },
    { name: '22.03.21', value: 136 },
    { name: '23.03.21', value: 126 },
    { name: '24.03.21', value: 116 },
    { name: '25.03.21', value: 136 },
    { name: '25.03.21', value: 166 },
    { name: '26.03.21', value: 146 },
    { name: '26.03.21', value: 116 },
    { name: '27.03.21', value: 116 },
    { name: '25.03.21', value: 111 },
    { name: '26.03.21', value: 115 },
    { name: '26.03.21', value: 136 },
    { name: '27.03.21', value: 186 },
  ];
  return (
    <>
      <div className="dashboard__header">
        <h2>Статистика измерений</h2>
      </div>
      <div className="dashbord__wrapper">
        <BarChart data={data} />
        <BarChart data={data} />
        <BarChart data={data} />
        <BarChart data={data} />
      </div>
    </>
  );
};

export default PacientDashbordsContent;
