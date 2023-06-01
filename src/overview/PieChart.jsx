import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 200 },
  { name: "Group B", value: 150 },
  { name: "Group C", value: 500 },
  { name: "Group D", value: 150 }
];

const COLORS = ["#d30744", "#3969dc", "#00d43d", "#dc3969"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function Chart() {
  return (
    <PieChart width={330} height={340}>
      <Pie
        data={data}
        cx={170}
        cy={180}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={140}
        // fill="#8884d8"
        fill="red"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}