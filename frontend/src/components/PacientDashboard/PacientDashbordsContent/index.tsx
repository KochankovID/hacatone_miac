import BarChart from 'components/Dashboards/BarChart';
import BarChart2 from 'components/Dashboards/BarChart2';
import BarChart3 from 'components/Dashboards/BarChart3';
import BarChart4 from 'components/Dashboards/BarChart4';
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
  const data2 = [
    { name: '21.03.21', value: 80 },
    { name: '22.03.21', value: 85 },
    { name: '23.03.21', value: 96 },
    { name: '24.03.21', value: 79 },
    { name: '25.03.21', value: 91 },
    { name: '25.03.21', value: 100 },
    { name: '26.03.21', value: 96 },
    { name: '26.03.21', value: 70 },
    { name: '27.03.21', value: 85 },
    { name: '25.03.21', value: 81 },
    { name: '26.03.21', value: 79 },
    { name: '26.03.21', value: 96 },
    { name: '27.03.21', value: 91 },
  ];
  const data3 = [
    { name: '21.03.21', value: 80 },
    { name: '22.03.21', value: 60 },
    { name: '23.03.21', value: 61 },
    { name: '24.03.21', value: 63 },
    { name: '25.03.21', value: 90 },
    { name: '25.03.21', value: 65 },
    { name: '26.03.21', value: 96 },
    { name: '26.03.21', value: 60 },
    { name: '27.03.21', value: 110 },
    { name: '25.03.21', value: 81 },
    { name: '26.03.21', value: 98 },
    { name: '26.03.21', value: 60 },
    { name: '27.03.21', value: 91 },
  ];
  return (
    <>
      <div className="dashboard__header">
        <h2>Статистика измерений</h2>
      </div>
      <div className="dashbord__wrapper">
        <BarChart data={data} />
        <BarChart2 data={data2} />
        <BarChart3 data={data3} />
        <BarChart4 data={data3} />
      </div>
    </>
  );
};

export default PacientDashbordsContent;
