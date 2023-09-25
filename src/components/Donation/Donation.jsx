
const Donation = ({donate}) => {
const{img,title,category,price} = donate
return (
<div className="border flex shadow-md bg-blue-200 p-1">
   <div>
       <img className="h-32 w-32 object-cover" src={img} alt="" />       
  </div> 


   <div className=" pl-3 ">
      <button>  {category} </button>
     <h3> {title} </h3>
      <p>  ${price}</p>
      <button className="py-2 px-8 bg-orange-500 mt-3 rounded-md text-white"> view Details </button>
   </div> 



</div>
);
};

export default Donation;