import { motion } from "motion/react";
import { Home, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="relative w-full h-[55vh] bg-cover bg-center bg-fixed mt-15 overflow-hidden"
      style={{ backgroundImage: "url('/houseBanner.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <Home size={28} className="text-white" />
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Find Your Perfect{" "}
              <span className="text-primary">Stay Today</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
              Explore comfortable rooms, modern apartments, and affordable stays
              tailored to your lifestyle and budget.
            </p>

            {/* CTA Button */}
            <Link to="/properties">
              <button className="group bg-primary-dark text-white px-8 py-3 rounded-full font-semibold hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                Explore Properties
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
