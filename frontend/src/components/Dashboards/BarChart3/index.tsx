import { Radio } from 'antd';
import { parseDate } from 'helpers';
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
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
          autoScaleXaxis: true,
        },
      },
      dataLabels: {
        offsetY: -15,
        style: {
          fontSize: '10px',
          colors: ['#000'],
        },
      },

      plotOptions: {
        bar: {
          //   distributed: true,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
          columnWidth: '70%',
          colors: {
            ranges: [
              {
                from: 50,
                to: 84,
                color: '#25e595',
              },
              {
                from: 85,
                to: 150,
                color: '#e52552',
              },
            ],
          },
        },
      },
      xaxis: {
        categories: data.map((el: any) => parseDate(el.created_at)),
        tickPlacement: 'on',
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
        data: data.map((el: any) => el.pulse),
      },
    ],
  };
  return (
    // <ChartsWrapper title={title} subtitle={subtitle}>
    <div className="chart-wrapper">
      <h3>Пульс</h3>
      {/* <Radio.Group
        defaultValue="a"
        buttonStyle="solid"
        onChange={(evt) => {
          console.log(evt.target.value);
        }}
      >
        <Radio.Button value={3}>2 месяца</Radio.Button>
        <Radio.Button value={2}>Месяц</Radio.Button>
        <Radio.Button value={1}>Неделя</Radio.Button>
        <Radio.Button value={0}>День</Radio.Button>
      </Radio.Group> */}
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
