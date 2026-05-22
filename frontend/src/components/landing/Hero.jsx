import { useState, useEffect } from "react";
import { heroContent } from "../../assets/house_data";
import { ChevronRight, ChevronLeft, Home, MapPin, Search } from "lucide-react";

import { motion } from "motion/react";

const Hero = () => {
  const [countIndex, setCountIndex] = useState(0);

  const nextCount = () => {
    setCountIndex((prev) => (prev === heroContent.length - 1 ? 0 : prev + 1));
  };

  const prevCount = () => {
    setCountIndex((prev) => (prev === 0 ? heroContent.length - 1 : prev - 1));
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextCount();
    }, 5000);

    return () => clearInterval(interval);
  }, [countIndex]);

  const slideIndex = heroContent[countIndex];

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        key={slideIndex.image}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${slideIndex.image})`,
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/50"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          key={countIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6"
          >
            <Home size={18} />
            <span className="text-sm font-medium">Find Your Dream Home</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {slideIndex.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            {slideIndex.description}
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-white rounded-full p-2 max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-2">
              <div className="flex-1 flex items-center gap-2 px-4">
                <MapPin size={20} className="text-gray-400" />

                <input
                  type="text"
                  placeholder="Search by location, property type, or keyword..."
                  className="w-full outline-none text-gray-700 placeholder:text-gray-400"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Search size={18} />
                Search
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Previous Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevCount}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white"
      >
        <ChevronLeft size={24} />
      </motion.button>

      {/* Next Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextCount}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white"
      >
        <ChevronRight size={24} />
      </motion.button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroContent.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCountIndex(index)}
            className={`rounded-full transition-all duration-300 ${
              countIndex === index
                ? "w-8 h-2 bg-blue-600"
                : "w-2 h-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
