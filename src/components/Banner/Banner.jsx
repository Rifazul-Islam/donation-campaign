

import PropTypes from 'prop-types'
import './Banner.css'
const Banner = ({setName}) => {

const handlerSubmit = (e) =>{ 
  e.preventDefault()
  let form = e.target ;
  let name = form.name.value;
  setName(name)
  e.target.name.value = ''
}


return (
<div className="py-5 layoutImg">
 <div className="flex justify-center items-center h-[70vh] p-1">
              

<div>
<h2 className="lg:text-4xl font-semibold text-2xl text-center"> I Grow By Helping People In Need </h2> <br></br>
 <div className="text-center py-4">
<form onSubmit={handlerSubmit} >
<input  className="py-2 lg:px-14 border-2 border-gray-400" type="text" name="name" id="" /> 
 <button className="py-2 px-5 bg-[#FF444A] text-white hover:bg-red-700"> <input type="submit" value="Submit" /> </button>
</form>
  </div>
</div>

</div>                                        
</div>
);
};

Banner.propTypes = {
  setValue: PropTypes.string
}
export default Banner;