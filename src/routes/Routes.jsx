import {createBrowserRouter} from "react-router-dom";
import Root from "../components/root/Root";
import Home from "../components/pages/Home";
import Apartment from "../components/estates/Apartment";
import SeniorLivingCommunites from "../components/estates/SeniorLivingCommunites";
import SingleFamilyHome from "../components/estates/SingleFamilyHome";
import Students from "../components/estates/Students";
import Townhouses from "../components/estates/Townhouses";
import VacationRentals from "../components/estates/VacationRentals";
import CardDetails from "../components/commons/CardDetails/CardDetails";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Error from "../components/pages/Error";
import Profile from "../components/pages/Profile";
import PrivateProfile from "../privateRoute/PrivateProfile";
import ContactUs from "../components/pages/ContactUs";
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
         {
          path: "/apartment",
          element:<Apartment></Apartment>,
          loader: () => fetch('/apartmentsData.json')
         },
         {
          path: "/apartment/:id",
          loader: () =>fetch ('/apartmentsData.json'),
          element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
         },    
         {
          path: "/senior-living", 
          element: <SeniorLivingCommunites></SeniorLivingCommunites>,
          loader: () => fetch('/seniorLivingCommunitiesData.json')
         },
         {
          path: "/senior-living/:id",
          loader: () =>fetch ('/seniorLivingCommunitiesData.json'),
          element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
         },    
         {
          path: "/single-family-home", 
          element:<SingleFamilyHome></SingleFamilyHome>,
          loader: () => fetch('/SingleFamilyHomesData.json')
         },
         {
          path: "/single-family-home/:id",
          loader: () =>fetch ('/SingleFamilyHomesData.json'),
          element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
         },
         {
          path: "/student-living",
          element:<Students></Students>,
          loader: () => fetch('/studentHousingData.json')
         },
         {
          path: "/student-living/:id",
          loader: () =>fetch ('/studentHousingData'),
          element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
         },
         {
          path: "/townhouses",
          element: <Townhouses></Townhouses>,
          loader: () => fetch('/townhousesData.json')
         }, 
         {
          path: "/townhouses/:id",
          loader: () =>fetch ('/townhousesData.json'),
          element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
         },
         {
          path: "/vacation-rentals",
          element: <VacationRentals></VacationRentals>,
          loader: () => fetch('/vacationRentalsData.json')
         },
         {
          path: "/vacation-rentals/:id",
          loader: () =>fetch ('/vacationRentalsData.json'),
          element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
         },
         {
          path:"/login",
          element:<Login></Login>
         },
         {
          path:"/register",
          element:<Register></Register>
         },
         {
          path:'/profile',
          element:<PrivateProfile><Profile></Profile></PrivateProfile>,
         },
         {
          path:'/contactUs',
          element:<ContactUs></ContactUs>,
         }
      ]
    },
  ]);


  export default router