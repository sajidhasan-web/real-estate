import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
  const apartmentData = useLoaderData();
  const { id } = useParams();
  console.log(apartmentData, id);
  const intId = parseInt(id);
  const cardInfo = apartmentData.find((cardInfo) => cardInfo.id == intId);
  console.log(cardInfo);
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
  } = cardInfo;
  return (
    <div className="">
      <div
        className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12"
      >
        <img
          src={image_url}
          alt=""
          className="object-cover w-full h-full rounded  lg:col-span-7"
        />
        <div className="md:p-6 space-y-2 lg:col-span-5">
          <div className="card-body">
            <p className="text-sky-400 font-semibold">#{segment_name}</p>
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {estate_title}
            </h3>
            <p className="text-gray-400 italic">{location}</p>
            <p>
              Price:
              <span className="text-primary text-lg font-medium ml-2">
                {price}
              </span>
            </p>
            <div className="flex justify-between">
              <span className="">
                Status:<span className="text-green-500 ">{status}</span>{" "}
              </span>
              <span>
                Area: <span className="text-red-300 ">{area}</span>{" "}
              </span>
            </div>
            <p>{description}</p>
            <ul>
                <p className="font-bold text-lg">Facilities:</p>
               {
                 facilities.map((facility, idx) => <li key={idx}>{idx + 1}. {facility}</li>)
               }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
