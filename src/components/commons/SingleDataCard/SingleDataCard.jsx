import { Link } from "react-router-dom";

const SingleDataCard = ({ singleData }) => {
  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image_url,
  } = singleData;
  return (
    <div className="card bg-base-100">
      <figure className="w-full">
        <img
          className="max-w-full md:h-[400px] object-cover"
          src={image_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-xl md:text-2xl font-bold">{estate_title}</h2>
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
           
          </p>
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  );
};

export default SingleDataCard;
