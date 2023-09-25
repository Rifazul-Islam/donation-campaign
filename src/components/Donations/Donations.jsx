import { useEffect, useState } from "react";
import Donation from "../Donation/Donation";

const Donations = () => {

const[donates,setDonates]= useState([])
const[donateLength,setDonateLength] = useState(4);
const [found,setFound] = useState(false)

useEffect(()=>{
 const selectDonates = JSON.parse(localStorage.getItem('donations'))
 if(selectDonates){
 setDonates(selectDonates)
 }else{
  setFound("No Data Found !")
 }
 
},[])


return (
<div>

 {found ? <p className="flex  justify-center items-center h-[70vh]"> No Data Found </p> :
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  { donates &&
    donates.slice(0, donateLength).map(donate => <Donation key={donate.id} donate={donate}> </Donation>)
  
  }         
</div> 
 }     

<div className={`text-center py-7  ${donates.length === donateLength ? "hidden" : ' '}`}>
{
   donates.length >= 4 &&  <button onClick={()=>setDonateLength(donates.length)} className="btn btn-success">See All</button>
} 
  </div>                      
</div>
);
};

export default Donations;