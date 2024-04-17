import EstateCards from "../EstateCards/EstateCards";
import OurGlobalPatners from "../OurGlobalPatners/OurGlobalPatners";
import Slider from "../Slider/Slider";



const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <OurGlobalPatners></OurGlobalPatners>
           <EstateCards></EstateCards>
        </div>
    );
};

export default Home;