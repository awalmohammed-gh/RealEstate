import { useMemo } from "react";
import { useHouseForm } from "../../context/HouseContextProvider";
import PropertiesCard from "../card/PropertiesCard";
import { Home, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const RelatedProperties = ({ status }) => {
  const { properties } = useHouseForm();

  const relatedData = useMemo(() => {
    return properties.filter(
      (property) =>
        property.property.status === status && property.isFeatured !== false,
    );
  }, [properties, status]);

  // Get only top 4 related properties
  const displayProperties = relatedData.slice(0, 4);

  const getStatusTitle = () => {
    switch (status) {
      case "Sale":
        return "For Sale";
      case "Rent":
        return "For Rent";
      default:
        return status;
    }
  };

  return (
    <div className="mt-12 container-layout">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="">
          <h2 className="text-2xl font-bold text-dark">
            You May Also Like <span className="text-primary">This</span>
          </h2>
          <p className="text-gray text-sm mt-1">
            Similar properties you might be interested in
          </p>
        </div>
        <Link
          to={`/house-category/${status?.toLowerCase()}`}
          onClick={() => scrollTo(0,0)}
          className="flex items-center gap-1 text-primary hover:text-primary-dark transition-colors text-sm font-medium"
        >
          View All
          <ChevronRight size={16} />
        </Link>
      </div>

      {/* Properties Grid */}
      {displayProperties.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProperties.map((property, index) => (
            <PropertiesCard house={property} key={property.id} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-3">
            <Home size={28} className="text-gray" />
          </div>
          <h3 className="text-lg font-semibold text-dark mb-1">
            No Related Properties
          </h3>
          <p className="text-gray text-sm">
            No other {getStatusTitle()} properties available at the moment.
          </p>
        </div>
      )}
    </div>
  );
};

export default RelatedProperties;
