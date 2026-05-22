import { useState } from "react";
import { useHouseForm } from "../context/HouseContextProvider";
import {
  CircleCheck,
  Filter,
  HouseIcon,
  X,
  ChevronRight,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import PropertiesCard from "../components/card/PropertiesCard";
import { motion } from "motion/react";

const House = () => {
  const { properties, search, setSearch } = useHouseForm();
  const [selectCategory, setSelectCategory] = useState(["All"]);
  const [openFilter, setOpenFilter] = useState(false);

  const uniqueCategory = [
    "All",
    ...new Set(properties.map((p) => p.property?.type).filter(Boolean)),
  ];

  const handleCategory = (type) => {
    setSelectCategory((prev) => {
      if (type === "All") {
        return ["All"];
      }
      const newSelection = prev.includes(type)
        ? prev.filter((item) => item !== type)
        : [...prev.filter((item) => item !== "All"), type];
      return newSelection.length === 0 ? ["All"] : newSelection;
    });
  };

  // Fixed search filter logic
  const filterProperties = properties.filter((property) => {
    // Category filter
    const matchesCategory =
      selectCategory.includes("All") ||
      selectCategory.includes(property.property?.type);

    // Search filter - matches multiple fields
    const matchesSearch =
      search === "" ||
      property.location?.name?.toLowerCase().includes(search.toLowerCase()) ||
      property.location?.region?.toLowerCase().includes(search.toLowerCase()) ||
      property.property?.type?.toLowerCase().includes(search.toLowerCase()) ||
      property.property?.status?.toLowerCase().includes(search.toLowerCase()) ||
      property.title?.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-light">
      {/* Header Banner */}
      <div
        className="relative flex items-center justify-center bg-cover bg-center w-full h-[40vh]"
        style={{ backgroundImage: `url(/banner1.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
            <HouseIcon size={28} className="text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Discover Spaces You'll Love
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            From cozy rooms to luxury apartments, find the perfect place to stay
            with ease and confidence.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-layout py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setOpenFilter(!openFilter)}
              className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-2">
                <SlidersHorizontal size={18} className="text-primary" />
                <span className="font-medium text-gray-700">Filters</span>
              </div>
              <div className="flex items-center gap-2">
                {!selectCategory.includes("All") && (
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                    {selectCategory.length}
                  </span>
                )}
                <ChevronRight
                  size={16}
                  className={`transform transition-transform text-gray-400 ${
                    openFilter ? "rotate-90" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Left Sidebar - Categories */}
          <div
            className={`lg:w-72 shrink-0 transition-all duration-300 ${
              openFilter ? "block" : "hidden lg:block"
            }`}
          >
            <div className="sticky top-24 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <Filter size={18} className="text-primary" />
                  <h3 className="font-semibold text-dark">
                    Filter by Category
                  </h3>
                </div>
                <button
                  onClick={() => setOpenFilter(false)}
                  className="lg:hidden text-gray-500 hover:text-gray-700"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-2">
                {uniqueCategory.map((category, index) => (
                  <button
                    onClick={() => handleCategory(category)}
                    key={index}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                      selectCategory.includes(category)
                        ? "bg-primary/10 text-primary"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-sm font-medium capitalize">
                      {category}
                    </span>
                    <CircleCheck
                      size={18}
                      className={`${
                        selectCategory.includes(category)
                          ? "text-primary"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Clear Filters Button */}
              {!selectCategory.includes("All") && (
                <button
                  onClick={() => setSelectCategory(["All"])}
                  className="mt-4 w-full flex items-center justify-center gap-1 text-sm text-red-500 hover:text-red-600 transition-colors"
                >
                  <X size={14} />
                  Clear all filters
                </button>
              )}
            </div>
          </div>

          {/* Right Side - Properties Grid */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
              {/* Results Count */}
              <div>
                <p className="text-gray">
                  Showing{" "}
                  <span className="font-semibold text-dark">
                    {filterProperties.length}
                  </span>{" "}
                  properties
                </p>
              </div>

              {/* Search Bar */}
              <div className="flex items-center border border-gray-300 rounded-full py-2 px-4 bg-white shadow-sm w-full md:w-96">
                <Search size={18} className="text-gray" />
                <input
                  className="bg-transparent outline-none flex-1 ml-2 text-dark placeholder:text-gray"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  type="text"
                  placeholder="Search by location, type, status..."
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="ml-2 text-gray hover:text-dark"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Active Filters */}
              {!selectCategory.includes("All") && (
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm text-gray">Active filter:</span>
                  <div className="flex flex-wrap gap-1">
                    {selectCategory.map((cat) => (
                      <span
                        key={cat}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium inline-flex items-center gap-1"
                      >
                        <span className="capitalize">{cat}</span>
                        <button
                          onClick={() => handleCategory(cat)}
                          className="hover:text-primary-dark"
                        >
                          <X size={14} />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Properties Grid */}
            {filterProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {filterProperties.map((property, index) => (
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
                  <HouseIcon size={32} className="text-gray" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-2">
                  No Properties Found
                </h3>
                <p className="text-gray">
                  Try clearing your filters or check back later for new listings
                </p>
                <button
                  onClick={() => {
                    setSelectCategory(["All"]);
                    setSearch("");
                  }}
                  className="mt-4 text-primary hover:text-primary-dark font-medium inline-flex items-center gap-1"
                >
                  Clear all filters
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default House;
