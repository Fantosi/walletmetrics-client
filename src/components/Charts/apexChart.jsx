import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import style from './apexChart.module.css';


const ChartComponent = ({ newDatasDayChart }) => {
  // 데이터 변환
  const transformedData = newDatasDayChart.map((data, index) => ({
    x: index + 1,
    y: data.newWalletNum,
    startDate: data.startDate,
    endDate: data.endDate,
    newWalletCumulativeNum: data.newWalletCumulativeNum
  }));

  // 차트 옵션 설정
  const options = {
    series: [{
      name: 'New Wallets',
      data: transformedData
    }],
    chart: {
      type: 'area',
      stacked: false,
      height: 350,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: 'zoom'
      }
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 0,
    },
    title: {
      text: 'New Wallets',
      align: 'left'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      },
    },
    yaxis: {
      title: {
        text: 'Number of New Wallets'
      },
    },
    xaxis: {
      type: 'datetime',
      labels: {
        formatter: function (val, timestamp) {
            const startDate = new Date(timestamp).toLocaleDateString();
            return startDate;
          }
      }
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return val;
        }
      },
      x: {
        formatter: function (val, timestamp) {
            const dataPointIndex = Math.floor(val) - 1;
            if (transformedData[dataPointIndex]) {
              const data = transformedData[dataPointIndex];
              return `${data.startDate} - ${data.endDate}`;
            }
            return '';
          }
      }
    }
  };

  useEffect(() => {
    // Create and render the chart
    const chart = new ApexCharts(document.getElementById('chart'), options);
    chart.render();

    // Clean up on component unmount
    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="chart" className={style.chart}/>;
};

export default ChartComponent;