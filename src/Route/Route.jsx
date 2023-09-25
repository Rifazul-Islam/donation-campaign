import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Donation from "../components/Donation/Donation";
import Statistics from "../components/Statistics/Statistics";
import DonationDetails from "../components/DonationDetails/DonationDetails";

const router = createBrowserRouter([
 {
   path:"/",
   element:<Root/>,
   children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/donation",
      element:<Donation/>
    },
    {
     path:"/statistics",
     element:<Statistics/>
    },
    {
      path:"/category/:id",
      element:<DonationDetails></DonationDetails>,
      loader:()=>fetch('/public/donations.json')
      
    }
   ]
 }

])

export default router;