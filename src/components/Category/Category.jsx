import PropType from 'prop-types'
import { useNavigate } from 'react-router-dom';
const Category = ({donation}) => {
const {id,img,category,text_color,category_bg,card_bg,title} = donation;
   const navigate = useNavigate()
  const handlerClick=()=>{
     navigate(`/category/${id}`)
  }

 return (
<div>
<div onClick={handlerClick} className={`card card-compact   border-2`}>
  <figure><img className="w-full h-[200px] object-cover" src={img} alt="Shoes" /></figure>
  <div className=" pl-2 pb-2 ">
   <p className=" "><button className="py-2 "> {category} </button></p>
    <h2  className={`card-title bg-[${card_bg}]-500 `}>  {title} </h2>
  </div>
</div>                                      
</div>
);
};

Category.propType = {
donation: PropType.object
}

export default Category;