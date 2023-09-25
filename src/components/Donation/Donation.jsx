
const Donation = ({donate}) => {
const{img,title,category,price,text_color,category_bg,card_bg} = donate
return (
<div style={{backgroundColor:card_bg}} className="border flex shadow-md">
   <div >
       <img className=" w-40 h-[170px]  object-cover" src={img} alt="" />       
  </div> 


   <div className="pl-3 mt-2">
   <p className='pt-2'><button style={{backgroundColor:category_bg, color:text_color, padding:'3px 10px'}} className="py-2 "> {category} </button></p>
     <h3 className="text-xl font-bold"> {title} </h3>
      <p style={{color:text_color}}>  ${price}</p>
      <button style={{backgroundColor:text_color}} className="py-2 px-8  mt-3 rounded-md text-white"> View Details </button>
   </div> 



</div>
);
};

export default Donation;