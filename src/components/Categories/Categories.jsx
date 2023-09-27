import { useEffect, useState } from "react";
import Category from "../Category/Category";
import PropTypes from 'prop-types'
const Categories = ({value}) => {

const[donations,setDonations] = useState([])

useEffect( ()=>{
   
   fetch('./donations.json')
   .then(res => res.json())
   .then(data => setDonations(data))
              
},[])


const filtered = donations.filter(item => item.category === value)



return (
<div className="mt-36">

   <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-1">
       {
          value ? (filtered?.map(donation => <Category key={donation.id} donation={donation} ></Category>))
             
         : (donations?.map(donation => <Category key={donation.id} donation={donation} ></Category>)) 
       }
   </div>

</div>
);
};

Categories.propTypes = {
  value:PropTypes.string
}
export default Categories;