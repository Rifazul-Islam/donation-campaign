import { NavLink } from "react-router-dom";


const Navbar = () => {

  const links = <>
     <li> <NavLink to="/"
      className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "bg-green-200 p-2 underline" : ""
    }
     
     >Home</NavLink> </li>

     <li> <NavLink to="/donation"
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
<div className="flex justify-between items-center p-1 py-8 shadow-md ">
   <div>
     <h3> <img className="w-32" src="./public/Logo.png" alt="" /> </h3>
  </div>
   <div className="sm:block">
      <ul className="flex space-x-3 "> {links} </ul>        
  </div>                            
</div>
);
};

export default Navbar;