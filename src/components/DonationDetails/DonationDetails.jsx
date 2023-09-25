import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
const[donation,setDonation] = useState()
 const donations = useLoaderData()
 const {id} = useParams()
 const idInt = parseInt(id)
 
useEffect(()=>{
  
  let findData = donations.find(donation => donation.id === idInt)
  setDonation(findData);
},[idInt,donations])

return (
<div className="px-1">
     <img className="w-full h-[100vh] object-cover" src={donation?.img} alt="" /> 
      <h3 className="text-4xl font-bold pt-14 pb-3"> {donation?.title} </h3> 

     <p>{donation?.description}  </p>                          
</div>
);
};

export default DonationDetails;