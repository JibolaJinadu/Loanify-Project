import React, { useState, useCallback } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Active Disbursement', value: 900 },
  { name: 'Repayment', value: 300 },
  { name: 'Default', value: 300 },
];
const COLORS = ['#0744D3', '#44D307', '#D30744'];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        <tspan style={{ fontSize: '11px', fontWeight: '700' }}>
          {payload.name}
        </tspan>
        <tspan
          x={cx}
          y={cy}
          dy={30}
          textAnchor="middle"
          style={{ fontSize: '16px', fontWeight: '400' }}
        >
          {`${(percent * 100).toFixed(2)}%`}
        </tspan>
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        cornerRadius={50}
        paddingAngle={-5}
      />
    </g>
  );
};

const ReportPieChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onMouseEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div className="">
      <ResponsiveContainer width={160} height={200}>
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            dataKey="value"
            onMouseEnter={onMouseEnter}
            cornerRadius={50}
            paddingAngle={-5}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReportPieChart;
