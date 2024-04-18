import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const SingleDataCard = ({ singleData }) => {
  const {
    estate_title,
    description,
    price,
    status,
    area,
    location,
    image_url,
  } = singleData;
  return (
    <div className="flex flex-col bg-base-100 transition hover:shadow-xl group">
      <figure className="w-full">
        <img
          className="max-w-full md:h-[400px] object-cover"
          src={image_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-xl lg:text-2xl font-bold hover:underline">{estate_title}</h2>
        <p className="text-gray-400 italic">{location}</p>
        <p>
          Price:
          <span className="text-primary text-lg font-medium ml-2">{price}</span>
        </p>
        <div className="flex justify-between">
          <span className="">
            Status:<span className="text-green-500 ml-2">{status}</span>{" "}
          </span>
          <span>
            Area: <span className="text-red-300 ml-2">{area}</span>{" "}
          </span>
        </div>
        {description.length > 100 ? (
          <p>
            {description.slice(0, 100)}{" "} <Link to={`${singleData.id}`}> 
            <span className="text-blue-500 cursor-pointer block hover:underline">read more</span>
            </Link>
           
           <Link to={`${singleData.id}`}> <button className="btn btn-sm btn-primary mt-3">View Property</button></Link>
          </p>
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  );
};

SingleDataCard.propTypes = {
  singleData: PropTypes.object.isRequired,
};

export default SingleDataCard;
