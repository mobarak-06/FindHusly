import { Helmet } from "react-helmet-async";
import SingleProperty from "./SingleProperty";
import { useLoaderData } from "react-router-dom";
const Properties = () => {
  const property = useLoaderData();
  

  return (
    <div className="mt-10 mx-10 md:mx-14 lg:mx-24">
      <Helmet>
        <title>FindHusly | Properties</title>
      </Helmet>
      <div className="text-center">
        <p className="text-xl text-red-500">Featured Properties</p>
        <h1 className="text-4xl font-semibold mt-6">Recommended For You</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {property.map((item) => (
          <SingleProperty key={item.id} property={item} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
