import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data?: { labels?: string[]; values?: number[] };
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const defaultData = {
    labels: [
      'Продукты малоимущим',
      'Лечение тяжелобольных',
      'Образовательные программы',
      'Поддержка инвалидов',
      'Общая деятельность организации',
      'Экологические проекты',
    ],
    values: [14307355, 6411990, 5000000, 3200000, 9829569, 10000000],
  };

  const chartData = data && data.labels && data.values
    ? {
        labels: data.labels,
        datasets: [
          {
            label: 'Расходы фонда',
            data: data.values,
            backgroundColor: [
              '#007bff', // синий - продукты
              '#ffc107', // желтый - лечение
              '#28a745', // зеленый - образование
              '#6f42c1', // фиолетовый - поддержка инвалидов
              '#17a2b8', // бирюзовый - общая деятельность
              '#fd7e14', // оранжевый - экология
            ],
            borderColor: '#ffffff',
            borderWidth: 2,
          },
        ],
      }
    : {
        labels: defaultData.labels,
        datasets: [
          {
            label: 'Расходы фонда',
            data: defaultData.values,
            backgroundColor: [
              '#007bff',
              '#ffc107',
              '#28a745',
              '#6f42c1',
              '#17a2b8',
              '#fd7e14',
            ],
            borderColor: '#ffffff',
            borderWidth: 2,
          },
        ],
      };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#333',
          font: {
            size: 14,
            family: 'Arial',
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(32, 67, 118, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = context.parsed || 0;
            // Форматируем число с разделением тысяч
            const formattedValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
            return `${label}: ${formattedValue} ₽`;
          }
        }
      },
    },
  };

  return (
    <div className="pie" style={{ width: '100%', height: 300 }}>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
