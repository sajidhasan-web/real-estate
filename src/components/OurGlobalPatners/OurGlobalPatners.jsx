import Marquee from "react-fast-marquee";
import partner1 from "../../assets/M/M1.jpg"
import partner2 from "../../assets/M/M2.jpg"
import partner4 from "../../assets/M/M4.jpg"
import partner5 from "../../assets/M/M5.jpg"
import partner6 from "../../assets/M/M6.jpg"

const OurGlobalPatners = () => {
    return (
        <div className="mt-10 md:mt-14">
            <h2 className="text-center text-2xl md:text-4xl font-bold pb-8 md:pb-12">Our Global Partners</h2>
           <Marquee className="">
                <div className="h-40 w-40 m-3">
                    <img src={partner1} alt="" />
                </div>
                <div className="h-40 w-40 m-3">
                    <img src={partner2} alt="" />
                </div>
                
                <div className="h-40 w-40 m-3">
                    <img src={partner4} alt="" />
                </div>
                <div className="h-40 w-40 m-3">
                    <img src={partner5} alt="" />
                </div>
                <div className="h-40 w-40 m-3">
                    <img src={partner6} alt="" />
                </div>
                <div className="h-40 w-40 m-3 ">
                    <img src={partner1} alt="" />
                </div>
                <div className="h-40 w-40 m-3">
                    <img src={partner2} alt="" />
                </div>
                
                <div className="h-40 w-40 m-3">
                    <img src={partner4} alt="" />
                </div>
                <div className="h-40 w-40 m-3">
                    <img src={partner5} alt="" />
                </div>
                <div className="h-40 w-40 m-3">
                    <img src={partner6} alt="" />
                </div>
           </Marquee>
            
        </div>
    );
};

export default OurGlobalPatners;