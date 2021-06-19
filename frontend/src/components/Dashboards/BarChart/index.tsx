import { Radio } from 'antd';
import { useState } from 'react';
import Chart from 'react-apexcharts';
import './style.css';
const BarChart = ({
  title,
  subtitle,
  data,
  weekData,
  monthData,
  trim = true,
  oneColor = false,
}: any) => {
  const barData = [data, weekData];
  const [chartState, setChartState] = useState(0);
  console.log(chartState);
  const state = {
    options: {
      dataLabels: {
        offsetY: -15,
        style: {
          fontSize: '10px',
          colors: ['#000'],
        },
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        },
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },

      xaxis: {
        categories: barData[chartState].map((el: any) => el.name),
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
        show: true,
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
        name: 'Cистолическое',
        data: barData[chartState].map((el: any) => el.top),
      },
      {
        name: 'Диастолическое',
        data: barData[chartState].map((el: any) => el.bottom),
      },
    ],
  };
  return (
    // <ChartsWrapper title={title} subtitle={subtitle}>
    <div className="chart-wrapper wide">
      <h3>Давление</h3>
      <Radio.Group
        defaultValue="a"
        buttonStyle="solid"
        onChange={(evt) => {
          console.log(evt.target.value);
          setChartState(evt.target.value);
        }}
      >
        <Radio.Button value={3}>2 месяца</Radio.Button>
        <Radio.Button value={2}>Месяц</Radio.Button>
        <Radio.Button value={1}>Неделя</Radio.Button>
        <Radio.Button value={0}>День</Radio.Button>
      </Radio.Group>
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
