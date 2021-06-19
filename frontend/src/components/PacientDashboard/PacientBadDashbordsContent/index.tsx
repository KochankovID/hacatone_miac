import BarChart from 'components/Dashboards/BarChart';
import BarChart2 from 'components/Dashboards/BarChart2';
import BarChart3 from 'components/Dashboards/BarChart3';
import BarChart4 from 'components/Dashboards/BarChart4';
import DashboardCard from 'components/Dashboards/Card';
import './style.css';

const PacientDashbordsContent = ({ children }: any) => {
  const data = [
    { name: '21.03.21 - у', top: 156, bottom: 80 },
    { name: '21.03.21 - о', top: 136, bottom: 85 },
    { name: '21.03.21 - д', top: 126, bottom: 96 },
    { name: '21.03.21 - в', top: 116, bottom: 79 },
  ];
  const weekData = [
    { name: '21.03.21 - у', top: 156, bottom: 80 },
    { name: '21.03.21 - о', top: 136, bottom: 85 },
    { name: '21.03.21 - в', top: 116, bottom: 79 },
    { name: '23.03.21 - д', top: 115, bottom: 79 },
    { name: '23.03.21 - в', top: 136, bottom: 96 },
    { name: '24.03.21 - у', top: 156, bottom: 80 },
    { name: '26.03.21 - у', top: 116, bottom: 85 },
    { name: '26.03.21 - о', top: 111, bottom: 81 },
    { name: '26.03.21 - д', top: 115, bottom: 79 },
    { name: '27.03.21 - о', top: 111, bottom: 81 },
    { name: '27.03.21 - д', top: 115, bottom: 79 },
    { name: '27.03.21 - в', top: 136, bottom: 96 },
  ];
  const data2 = [
    { name: '21.03.21', value: 40 },
    { name: '22.03.21', value: 95 },

    { name: '26.03.21', value: 140 },
    { name: '26.03.21', value: 96 },
    { name: '27.03.21', value: 115 },
  ];
  const data3 = [
    { name: '21.03.21', value: 145 },
    { name: '22.03.21', value: 140 },
    { name: '23.03.21', value: 120 },
    { name: '24.03.21', value: 99 },

    { name: '26.03.21', value: 100 },
    { name: '27.03.21', value: 91 },
  ];
  return (
    <>
      <div className="dashboard__header">
        <h2>Аномальные показатели</h2>
      </div>
      <div className="dashbord__wrapper">
        <DashboardCard
          title="Повышенное давление"
          text="21.03.21"
          type="Стресс"
          sis={136}
          dis={85}
        />
        <DashboardCard
          title="Пониженное давление"
          text="21.03.21"
          type="Спокойная обстановка"
          sis={110}
          dis={70}
        />
        <DashboardCard
          title="Повышенный пульс"
          text="21.03.21"
          type="Прогулка"
          pulse={110}
        />
        <BarChart data={data} weekData={weekData} />
        <BarChart2 data={data2} />
        {/* <BarChart3 data={data3} /> */}
        <BarChart4 data={data3} />
      </div>
    </>
  );
};

export default PacientDashbordsContent;
