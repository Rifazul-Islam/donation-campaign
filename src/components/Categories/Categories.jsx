import { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categories = () => {

const[donations,setDonations] = useState([])

useEffect( ()=>{
   
   fetch('/public/donations.json')
   .then(res => res.json())
   .then(data => setDonations(data))
              
},[])


return (
<div className="mt-36">

   <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-1">
       {
          donations && donations?.map(donation => <Category key={donation.id} donation={donation} ></Category>)
       }
   </div>

</div>
);
};

export default Categories;