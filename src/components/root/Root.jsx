import { Outlet } from "react-router-dom";
import Navbar from "../commons/Navbar/Navbar";
import Footer from "../commons/Footer/Footer";


const Root = () => {
    return (
        
        <div className="bg-gray-100">
            <Navbar></Navbar>
            <div className="container px-5 mx-auto font-roboto">
                
                <Outlet></Outlet>
           
            </div>
               <Footer></Footer>
         
        </div>
    );
};

export default Root;