import React from 'react';
import {
  ComposedChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Area, ResponsiveContainer,
} from 'recharts';
import { HeroSection } from '../../widgets/HeroSection/HeroSection';
import { Footer } from '../../widgets/footer/Footer';
import PieChart from '../../share/components/Pie';
import styles from "./Pages.module.css"
import { ScrollToTop } from '../../share/components/ScrollToTop';

const lineData = [
  { year: '2019', expenses: 4 },
  { year: '2020', expenses: 10 },
  { year: '2021', expenses: 27 },
  { year: '2022', expenses: 21 },
  { year: '2023', expenses: 15 },
  { year: '2024', expenses: 24 },
];

const FinancialReport: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <ScrollToTop />
      <HeroSection />
      <div className={styles.pageBlock}>
        
        <h2 style={{ textAlign: 'center' }}>Финансовый отчет</h2>
        <p style={{ textAlign: 'center', marginTop: -10, marginBottom: 40 }}>
          Информация о расходах организации
        </p>

        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={lineData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="year" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip formatter={(value: number) => `${value}`} labelFormatter={(label) => `Год: ${label}`} />
              <Area
                type="monotone"
                dataKey="expenses"
                stroke="#2a82ff"
                fill="#2a82ff"
                fillOpacity={0.3}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="expenses"
                stroke="#2a82ff"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <h3 style={{fontSize: "2rem", marginTop: 60, marginBottom: 20 }}>
          Расходы организации <br />по направлениям в 2024 году
        </h3>
        <div style={{ width: '100%', height: 300 }}>
          <PieChart />
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default FinancialReport;
