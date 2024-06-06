// ChartComponent.js
import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import './styles.css'; // Import CSS file

Chart.register(...registerables);

const ChartComponent = ({ data, options }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(chartRef.current, {
        type: 'bar', // Ensure this type matches the chart you want to create
        data,
        options,
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, options]);

  return <canvas ref={chartRef} className="chart-container" />;
};

export default ChartComponent;
