import { NavLink } from "react-router-dom";


const Navbar = () => {

  const links = <>
     <li> <NavLink to="/"
      className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "bg-green-200 p-2 underline" : ""
    }
     
     >Home</NavLink> </li>

     <li> <NavLink to="/donations"
    className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-green-200 p-2 underline rounded" : ""
  }
     >Donation</NavLink> </li>

     <li> <NavLink to="/statistics"
     className={({ isActive, isPending }) =>
     isPending ? "pending" : isActive ? "bg-green-200 p-2 underline" : ""
   }
     >Statistics</NavLink> </li>
   </>

return (
<div className=" bg-[#fffffff2] flex flex-col md:flex-row gap-7  lg:justify-between md:justify-between  items-center p-1 py-8 ">
   <div>
     <h3> <img className="w-32" src="./Logo.png" alt="" /> </h3>
  </div>
   <div className="">
      <ul className="flex space-x-3 "> {links} </ul>        
  </div>                            
</div>
);
};

export default Navbar;