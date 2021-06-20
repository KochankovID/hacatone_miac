import BarChart from 'components/Dashboards/BarChart';
import BarChart2 from 'components/Dashboards/BarChart2';
import BarChart3 from 'components/Dashboards/BarChart3';
import BarChart4 from 'components/Dashboards/BarChart4';
import DashboardCard from 'components/Dashboards/Card';
import DateRange from 'components/Dashboards/DateRange';
import './style.css';

const PacientDashbordsContent = ({ measurementsData }: any) => {
  const pressureData = measurementsData.filter((el: any) => {
    return (
      el.pressure_high > 130 ||
      el.pressure_high < 110 ||
      el.pressure_low < 70 ||
      el.pressure_low > 85
    );
  });
  const pulseData = measurementsData.filter(
    (el: any) => el.pulse > 85 || el.pulse < 60
  );
  const saturationData = measurementsData.filter(
    (el: any) => el.saturation < 95
  );
  return (
    <>
      <div className="dashboard__header">
        <h2>Аномальные показания</h2>
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
        <div className="dashboards__date-picker">
          <h3 className="dashboards__date-picker__title">Выберете период</h3>
          <div className="dashboards__date-picker__wrapper">
            <DateRange />
          </div>
        </div>
        <BarChart data={pressureData} />
        {/* <BarChart2 data={data} /> */}
        <BarChart3 data={pulseData} />
        <BarChart4 data={saturationData} />
      </div>
    </>
  );
};

export default PacientDashbordsContent;
