import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {

const navigation = useNavigation()

return (
<div className="max-w-[1200px] mx-auto">
      <Navbar></Navbar>    
      {
            navigation.state === "loading" ? <p className="text-center mt-36"> Loading... </p> : <div className="mt-2"> <Outlet></Outlet> </div>  
      }
      
      
                                  
</div>
);
};

export default Root;