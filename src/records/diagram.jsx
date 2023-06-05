import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
  const data = [
    {
      name: "text",
      uv: 60,
      pv: 40,
    
    },
    {
      name: "text",
      uv: 80,
      pv: 65,
    },
    {
      name: "text",
      uv: 55,
      pv:65,
    },
    
  ];
function Diagram(){
    return(
        <div>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="blue" />
                <Bar dataKey="uv" fill="green" />
            </BarChart>
        </div>
    )
}
export default Diagram