import { useParams } from "react-router-dom";
import { useHouseForm } from "../context/HouseContextProvider";
import { useMemo, useState } from "react";
import { HouseIcon, Search, X, Filter, Home } from "lucide-react";
import PropertiesCard from "../components/card/PropertiesCard";
import { motion } from "motion/react";

const HouseCategories = () => {
  const { category } = useParams();
  const { properties } = useHouseForm();
  const [search, setSearch] = useState("");

  const categoryData = useMemo(() => {
    return properties.filter(
      (property) => property.property.status.toLowerCase() === category,
    );
  }, [category, properties]);

  const filteredProperties = categoryData.filter((property) => {
    return (
      search === "" ||
      property.location?.region?.toLowerCase().includes(search.toLowerCase()) ||
      property.location?.name?.toLowerCase().includes(search.toLowerCase()) ||
      property.property?.type?.toLowerCase().includes(search.toLowerCase()) ||
      property.title?.toLowerCase().includes(search.toLowerCase())
    );
  });

  // Get category title for display
  const getCategoryTitle = () => {
    switch (category) {
      case "rent":
        return "Properties for Rent";
      case "sale":
        return "Properties for Sale";
      case "booking":
        return "Bookable Properties";
      default:
        return `${category} Properties`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div
        className="relative flex items-center justify-center bg-cover bg-center w-full h-[45vh]"
        style={{ backgroundImage: `url(/banner1.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <HouseIcon size={28} className="text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {getCategoryTitle()}
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Check availability, compare features, and book a comfortable stay
            that feels just like home.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-gray-200">Category:</span>
            <span className="text-blue-400 text-xl font-semibold uppercase">
              {category}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-layout py-12">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex items-center border border-gray-300 rounded-full py-3 px-5 bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
            <Search size={20} className="text-gray-400" />
            <input
              className="bg-transparent outline-none flex-1 ml-3 text-gray-700 placeholder:text-gray-400"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="text"
              placeholder="Search by location, type, or property name..."
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="ml-2 text-gray-400 hover:text-gray-600"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-semibold text-gray-800">
              {filteredProperties.length}
            </span>{" "}
            properties in{" "}
            <span className="capitalize font-semibold text-blue-600">
              {category}
            </span>
          </p>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <PropertiesCard house={property} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-gray-200">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
              <Home size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No Properties Found
            </h3>
            <p className="text-gray-500">
              No properties available in{" "}
              <span className="capitalize font-medium">{category}</span>{" "}
              category at the moment.
            </p>
            <button
              onClick={() => setSearch("")}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HouseCategories;
