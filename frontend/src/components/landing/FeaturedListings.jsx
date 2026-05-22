import { useHouseForm } from "../../context/HouseContextProvider";
import PropertiesCard from "../card/PropertiesCard";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useMemo } from "react";

const FeaturedListings = () => {
  const { properties } = useHouseForm();

  const featureProperty = useMemo(() =>{
    return [...properties].sort(() => Math.random() - 0.5).slice(0,4)
  },[properties])

  return (
    <section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Properties
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Featured <span className="text-blue-600">Listings</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Discover our handpicked selection of premium properties
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureProperty.length > 0 ? (
            featureProperty.map((property, index) => (
              <motion.div
                key={property._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PropertiesCard house={property} />
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="col-span-full text-center py-20 bg-white rounded-2xl border border-gray-200"
            >
              <p className="text-gray-500">No properties found</p>
            </motion.div>
          )}
        </div>

        {featureProperty.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/properties">
              <button className="group bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                View All Properties
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </Link>
          </motion.div>
        )}
    </section>
  );
};

export default FeaturedListings;
