
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";


const Piechart = () => {
             
              const [totalPrice,setTotalPrice] = useState([]);
              const [donations,setDonations] = useState([])
              const [totalNumber,setTotalNumber] = useState([])
              const [isTrue,setIsTrue] = useState(false)

              let result = [] ;

              useEffect( ()=>{
              
                fetch('/donations.json')
              .then(res =>res.json())
              .then(data => setDonations(data))

              
              const savePrice = JSON.parse(localStorage.getItem('donations'))
              const sum= savePrice.reduce((pre ,cur) => {return pre + cur.price},0)
              const allPriceSum = donations.reduce((pre,cur) =>{return pre + cur.price},0)
              setTotalNumber(allPriceSum)
              setTotalPrice(sum)
              setIsTrue(true)
              },[donations])

              const initialValue = [100,0];



              result.push(totalNumber)
              result.push(totalPrice)
            
              const str = [ 'Total Donation','your donation' ]
            
   
return (
<>
    
 {
   isTrue ?  <div className="container-fluid mb-3">
   <h3 className="mt-3">Welcome to Piechart </h3>
   <Chart 
   type="pie"
   width={500}
   height={400}

              
   series={ result.length > 0 ?  result :initialValue }                

   options={{
       
      noData:{text:"No data"}, 

         labels:str            
                        

    }}
   >
   </Chart>
</div>  : <h3> Hello </h3>
 }
    
     
                                        
</>
);
};

export default Piechart;