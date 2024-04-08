import {createBrowserRouter} from "react-router-dom";
import Root from "../components/root/Root";
import Home from "../components/pages/Home";
import Apartment from "../components/estates/Apartment";
import SeniorLivingCommunites from "../components/estates/SeniorLivingCommunites";
import SingleFamilyHome from "../components/estates/SingleFamilyHome";
import Students from "../components/estates/Students";
import Townhouses from "../components/estates/Townhouses";
import VacationRentals from "../components/estates/VacationRentals";
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
         {
          path: "/apartment",
          element:<Apartment></Apartment>,
          loader: fetch('/apartmentsData.json'),
         },    
         {
          path: "/senior-living", 
          element: <SeniorLivingCommunites></SeniorLivingCommunites>
         },    
         {
          path: "/single-family-home", 
          element:<SingleFamilyHome></SingleFamilyHome>
         },
         {
          path: "/student-living",
          element:<Students></Students>,
         },
         {
          path: "/townhouses",
          element: <Townhouses></Townhouses>,
         }, 
         {
          path: "/vacation-rentals",
          element: <VacationRentals></VacationRentals>,
         }   
      ]
    },
  ]);


  export default router