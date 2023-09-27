import PropType from 'prop-types'
import { useNavigate } from 'react-router-dom';
const Category = ({donation}) => {
const {id,img,category,text_color,category_bg,card_bg,title} = donation;
   const navigate = useNavigate()
  const handlerClick=()=>{
     navigate(`/DonationDetails/${id}`)
  }

 return (
<div style={{backgroundColor:card_bg}}>
<div  onClick={handlerClick} className={`card card-compact   border-2`}>
  <figure><img className="w-full h-[200px] object-cover" src={img} alt="Shoes" /></figure>
  <div className=" pl-2 pb-2 ">
   <p className='pt-2'><button style={{backgroundColor:category_bg, color:text_color, padding:'3px 10px'}} className="py-2 "> {category} </button></p>
    <h2 style={{color:text_color}}  className={`card-title`}>  {title} </h2>
  </div>
</div>                                      
</div>
);
};

Category.propType = {
donation: PropType.object
}

export default Category;