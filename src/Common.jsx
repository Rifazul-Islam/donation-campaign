
const Common = () => {
return (
<div>
(select donation / total donation) * 100        



{/* 
import { useEffect, useState } from "react";
import { Cell, Pie, PieChart } from "recharts";
import Piechart from "../Piechart/Piechart";
//  (select donation / total donation) * 100 

const Statistics = () => {

const [totalPrice,setTotalPrice] = useState(null);
const [donations,setDonations] = useState([])

useEffect( ()=>{

  fetch('/donations.json')
.then(res =>res.json())
.then(data => setDonations(data))

 const savePrice = JSON.parse(localStorage.getItem('donations'))
 const sum= savePrice.reduce((pre ,cur) => {return pre + cur.price},0)
 setTotalPrice(sum)

},[])

const allPriceSum = donations.reduce((pre,cur) =>{return pre + cur.price},0)

 const remainingPrice =  Math.abs(totalPrice - allPriceSum );
 console.log(remainingPrice);
 const percents = (remainingPrice / 5000)*100;
 console.log(percents);
const percent = (totalPrice / 5000 ) * 100 ;



  const data = [{value:300},{value:42} ];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

return (
<div className="relative z-10 flex justify-center items-center h-[70vh]">   
<div>
<PieChart width={400} height={400} >
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            
          </Pie>
        
        </PieChart> 
        <p className="absolute text-white top-[180px] left-[580px] z-20"> {percents}%</p>
        <p className="absolute text-white top-[250px] left-[585px]  z-20"> {percent}%</p>
        
</div>
            <Piechart/>
        </div>

);
};

export default Statistics;  */}



</div>
);

};

export default Common;





// import { PieChart, Pie,  Cell, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'Group A', value: 900 },
//   { name: 'Group B', value: 300 },
  
// ];
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
// const RADIAN = Math.PI / 500;
// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent,  }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'end' : 'start'} dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

// const Statistics = () => {
 
//     return (
//      <div className='border-2'>
//       check
//        <div width="100%" height="100%">
//         <PieChart width={400} height={400}>
//           <Pie
//             data={data}
//             cx="50%"
//             cy="50%"
//             labelLine={false}
//             label={renderCustomizedLabel}
//             outerRadius={80}
//             fill="#8884d8"
//             dataKey="value"
//           >
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//         </PieChart>
//       </div>
//      </div>
//     );
//   }



// export default Statistics;