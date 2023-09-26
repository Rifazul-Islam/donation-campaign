

import Chart from "react-apexcharts";
import useDonations from "../../hooks/useDonations";
import { useEffect, useState } from "react";

const Piechart = () => {
  const [donations] = useDonations()
 
     
  const[allDonation,setAllDonation] = useState()
  const[donatePrice,setDonatePrice] = useState()


   let result = [] ;


   useEffect( ()=>{

     const allDonations = donations.reduce((preValue ,currentValue) => preValue + currentValue.price , 0)
    
     const savePrice = JSON.parse(localStorage.getItem('donations')) 

      if(savePrice){
         const saveDonateSum = savePrice.reduce((preValue ,currentValue) => preValue + currentValue.price , 0)
      
         const totalRemaining = Math.abs(allDonations - saveDonateSum) ;
           
            setDonatePrice(saveDonateSum)
            setAllDonation(totalRemaining)
            
      }else{
         setDonatePrice(0)
         setAllDonation(allDonations)
      }

   },[donations])

   
   result.push(allDonation)
   result.push(donatePrice)       
            
   const str = [ 'Total Donation', 'your donation' ]
return (
<>
    
  <div className="container-fluid mb-3 flex  justify-center items-center">
   
 <div>
  <Chart className="flex flex-col"
   type="pie"
  
    width={370}
  
   height={350}

          
   series={result}                

   options={{
      colors:["#FF444A","#00C49F"],
      noData:{text:"No data"}, 
      labels:str         
 
    }}
   >

    
   </Chart>
 </div>
</div>   
                                 
</>
);
};


export default Piechart;