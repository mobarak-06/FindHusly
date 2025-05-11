import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import scale from "../../assets/ruler.png";
import { Link } from "react-router-dom";

const SingleProperty = ({ property }) => {
  const {
    image,
    estate_title,
    description,
    location,
    facilities,
    status,
    segment_name,
    area,
    price,
    id
  } = property;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl hover:border  mt-20 hover:border-gray-400 relative">
        <figure>
          <img className="hover:scale-105 h-56 w-full" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{estate_title}</h2>
          <p>{description}</p>
          <p className="flex">
            <IoLocationOutline size={20} />
            {location}
          </p>
          <div>
            <p>
              <span className="font-semibold">facilities:</span> {facilities[0]}
              , {facilities[1]}, {facilities[2]},
            </p>
          </div>
          <p className="bg-sky-500 text-white py-2 px-4 rounded-lg w-24 absolute top-2 left-2">
            For {status}
          </p>
          <p className="bg-accent w-28 py-2 px-3 rounded-xl text-white absolute top-2 right-2">
            {segment_name}
          </p>
          <div className="flex justify-between">
            <p className="flex gap-2">
              <img className="w-8" src={scale} alt="" />{" "}
              <span className="font-semibold text-xl">{area}</span>
            </p>
            <p className="text-xl font-bold">
              {price}
              <span className="text-xl text-gray-500">/SqFT</span>
            </p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/property/${id}`} className="btn btn-secondary">View Property</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProperty;

SingleProperty.propTypes = {
  property: PropTypes.object,
};
