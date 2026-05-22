import { motion } from "motion/react";
import { MapPin, Home, ChevronRight } from "lucide-react";
import { useHouseForm } from "../../context/HouseContextProvider";
import { Link } from "react-router-dom";

const AreaProperties = () => {
  const { properties } = useHouseForm();

  const uniqueAreas = properties.filter(
    (property, index, array) =>
      index ===
      array.findIndex(
        (item) => item.location.region === property.location.region,
      ),
  );

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Area Properties
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Properties By <span className="text-blue-600">Location</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Discover properties in your favorite neighborhoods
          </p>
        </motion.div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {uniqueAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={area.images[0]}
                  alt={area.location.region}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={18} className="text-blue-400" />
                    <h3 className="text-xl font-bold">
                      {area.location.region}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2  absolute -top-30 bg-primary-dark px-2 py-1 rounded-4xl">
                      <Home size={16} />
                      <p className="text-sm font-medium">
                        {area.location.region.length || 0}{" "}
                        <span className="text-gray-300">Properties</span>
                      </p>
                    </div>
                    <Link
                      to={`/properties/region/${area.location.region}`}
                      className="flex items-center gap-1 text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full hover:bg-white/30 transition-colors"
                    >
                      View All
                      <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/properties/all">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2">
              Browse All Properties
              <ChevronRight size={18} />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AreaProperties;
