import Chart from 'react-apexcharts';
import './style.css';
const BarChart = ({
  title,
  subtitle,
  data,
  trim = true,
  oneColor = false,
}: any) => {
  const state = {
    options: {
      chart: {
        // height: 100,
      },
      dataLabels: {
        enabled: true,
      },
      plotOptions: {
        bar: {
          //   distributed: true,
          colors: {
            ranges: [
              {
                from: 70,
                to: 92,
                color: '#25e595',
              },
              {
                from: 0,
                to: 69,
                color: '#e52552',
              },
              {
                from: 93,
                to: 200,
                color: '#e52552',
              },
            ],
          },
        },
      },
      xaxis: {
        categories: data.map((el: any) => el.name),
        labels: {
          trim: false,
          rotateAlways: true,
          style: {
            fontSize: '10px',
          },
        },
      },

      legend: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 950,
        options: {},
      },
    ],
    series: [
      {
        name: 'Давление',
        data: data.map((el: any) => el.value),
      },
    ],
  };
  return (
    // <ChartsWrapper title={title} subtitle={subtitle}>
    <div className="chart-wrapper">
      Cистолическое давление
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        height={300}
        width="100%"
      />
    </div>
    // </ChartsWrapper>
  );
};

export default BarChart;
