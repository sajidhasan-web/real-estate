import { Link } from "react-router-dom";
import cardImage1 from "../../assets/estateCardImages/apartments-min.jpg";
import cardImage2 from "../../assets/estateCardImages/family-home-min.jpg";
import cardImage3 from "../../assets/estateCardImages/seniorLiving-min.jpg";
import cardImage4 from "../../assets/estateCardImages/studentHouseing-min.jpg";
import cardImage5 from "../../assets/estateCardImages/townhouse-min.jpg";
import cardImage6 from "../../assets/estateCardImages/vacationRentals-min.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const EstateCards = () => {
  return (
    <div className="mt-10 md:mt-14">
      <h2 className="text-center text-2xl md:text-4xl font-bold pb-8 md:pb-12">Discover the Property Types</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link to={"/apartment"} data-aos="fade-up" data-aos-duration="2000">
          <div className="card bg-base-100 border">
            <figure className="px-10 pt-10">
              <img
                src={cardImage1}
                alt="APARTMENT"
                className="rounded-lg hover:scale-105 transition"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">APARTMENTS</h2>
            </div>
          </div>
        </Link>
        <Link to={"/single-family-home"} data-aos="fade-up" data-aos-duration="2000">
          <div className="card  bg-base-100  border">
            <figure className="px-10 pt-10">
              <img
                src={cardImage2}
                alt="FAMILY"
                className="rounded-lg hover:scale-105 transition"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">SINGLE-FAMILY HOME</h2>
            </div>
          </div>
        </Link>
        <Link to={"/senior-living"} data-aos="fade-up" data-aos-duration="2000">
          <div className="card  bg-base-100 border">
            <figure className="px-10 pt-10">
              <img
                src={cardImage3}
                alt="SENIOR"
                className="rounded-lg hover:scale-105 transition"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">SENIOR LIVING COMMUNITY</h2>
            </div>
          </div>
        </Link>
        <Link to={"/student-living"} data-aos="fade-up" data-aos-duration="2000">
          <div className="card  bg-base-100 border">
            <figure className="px-10 pt-10">
              <img
                src={cardImage4}
                alt="STUDENTS"
                className="rounded-lg hover:scale-105 transition"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">STUDENT HOUSING</h2>
            </div>
          </div>
        </Link>
        <Link to={"/townhouses"} data-aos="fade-up" data-aos-duration="2000">
          <div className="card  bg-base-100 border">
            <figure className="px-10 pt-10">
              <img
                src={cardImage5}
                alt="TOWNHOUSE"
                className="rounded-lg hover:scale-105 transition"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">TOWNHOUSE</h2>
            </div>
          </div>
        </Link>
        <Link to={"/vacation-rentals"} data-aos="fade-up" data-aos-duration="2000">
          <div className="card  bg-base-100 border">
            <figure className="px-10 pt-10">
              <img
                src={cardImage6}
                alt="VACATION-RENTAL"
                className="rounded-lg hover:scale-105 transition"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">VACATION RENTALS</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default EstateCards;
