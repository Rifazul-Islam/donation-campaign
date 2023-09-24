import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
return (
<div className="max-w-[1200px] mx-auto">
      <Navbar></Navbar>    
     <div className="mt-2"> <Outlet></Outlet> </div>                                
</div>
);
};

export default Root;