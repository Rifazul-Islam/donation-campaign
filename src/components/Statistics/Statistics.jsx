import { Cell, Pie, PieChart } from "recharts";


const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 }

  ];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const renderCustomizedLabel = ({  percent }) => {
    
  
    <text>
    {`${(percent * 100).toFixed(0)}%`}
  </text>

    }


const Statistics = () => {

    
 
return (
<div>

<PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart> 


     
</div>
);
};

export default Statistics;