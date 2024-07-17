import { IoLocationOutline } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";
import scale from "../../assets/ruler.png";

const PropertyDetails = () => {
    const properties = useLoaderData();
    console.log(properties);
  
    const {id} = useParams();
    const property = properties.find(item => item.id === id);
     
    console.log(property);

    const {
        image,
        estate_title,
        description,
        location,
        facilities,
        status,
        segment_name,
        area,
        price
      } = property;
    
    return (
        <div>
             <div className="card bg-base-100 relative">
        <figure>
          <img className="h-[500px] w-full" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{estate_title}</h2>
          <p>{description}</p>
          <p className="flex">
            <IoLocationOutline size={20} />
            {location}
          </p>
          <div>
            <p className="font-semibold">
              facilities:
            </p>
            <ul className="list-disc ml-16">
            {facilities.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>
          <p className="bg-sky-500 text-white py-2 px-4 rounded-lg w-24 absolute top-2 left-2">
            For {status}
          </p>
          <p className="bg-accent w-28 py-2 px-3 rounded-xl text-white absolute top-2 right-2">
            {segment_name}
          </p>
          <div>
            <p className="flex gap-2">
              <img className="w-8" src={scale} alt="" />{" "}
              <span className="font-semibold text-xl">{area}</span>
            </p>
            <p className="text-xl font-bold">
              {price}
              <span className="text-xl text-gray-500">/SqFT</span>
            </p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default PropertyDetails;