import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Statistics from "../components/Statistics/Statistics";
import DonationDetails from "../components/DonationDetails/DonationDetails";
import Donations from "../components/Donations/Donations";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
 {
   path:"/",
   element:<Root/>,
   errorElement:<ErrorPage/>,
   children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/donations",
      element:<Donations/>
    },
    {
     path:"/statistics",
     element:<Statistics/>,
     loader:()=>fetch('/public/donations.json')
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