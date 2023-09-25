import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
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

const handlerDataSave = ()=>{
 
const donationEmptyArr = [];

const donations = JSON.parse(localStorage.getItem('donations'));

if(!donations){ 
 donationEmptyArr.push(donation)
 localStorage.setItem('donations',JSON.stringify(donationEmptyArr))
 toast.success('your donate Successfully');
}
 
else{

  const exists = donations.find(item => item.id === idInt)
  if(!exists){
  donationEmptyArr.push(...donations,donation)   
  localStorage.setItem('donations',JSON.stringify(donationEmptyArr))
  toast.success('your donate Successfully');
}
else{
toast.error('your donate Already added');
}}};



return (
<div className="px-1">
    <div className="relative">  <img className="w-full   h-[100vh]  object-cover" src={donation?.img} alt="" /> 
    <div className="w-full p-8 absolute bottom-0   bg-[#0b0b0b80]"> 
          <button onClick={handlerDataSave} className="bg-orange-500  text-white p-2 rounded"> Donate ${donation?.price} </button>    
       </div> 
    
    </div>
    
      <h3 className="text-4xl font-bold pt-14 pb-3"> {donation?.title} </h3> 
      <p>{donation?.description}  </p>  
      <Toaster />                        
</div>
);
};

export default DonationDetails;