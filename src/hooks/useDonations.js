import { useEffect, useState } from "react";

const useDonations = () => {
  const [donations,setDonations] = useState([])
   useEffect(()=>{
              fetch('/public/donations.json')
              .then(res => res.json())
              .then(data => setDonations(data))
   } ,[]) 
  
   return[donations]
};

export default useDonations;