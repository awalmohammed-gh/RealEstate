import { MapPin, Bed, Bath, Square, TrendingUp, Heart, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useHouseForm } from "../../context/HouseContextProvider";

const PropertiesCard = ({ house }) => {
  // const [isLiked, setIsLiked] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const navigate = useNavigate();
  const { wishList, setWishList } = useHouseForm();

  const { id, title, pricing, location, property, features, images } = house;

  const isForSale = property.status === "Sale";

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  const priceDisplay = isForSale
    ? `₵${pricing.amount?.toLocaleString()}`
    : pricing.perNight
      ? `₵${pricing.perNight.toLocaleString()}/night`
      : `₵${pricing.perMonth?.toLocaleString()}/month`;

  // const handleLikeClick = (e) => {
  //   e.preventDefault();
  //   setIsLiked(!isLiked);
  // };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="group"
    >
      <div>
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer">
          {/* Image Container */}
          <div
            className="relative h-60 overflow-hidden"
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            <img
              src={images?.[0] || "/placeholder.jpg"}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />

            {/* Status Badge - Always visible */}
            <span
              className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold text-white rounded-full z-10 ${
                property.status === "For Sale" || property.status === "Sale"
                  ? "bg-green-500"
                  : property.status === "For Rent" || property.status === "Rent"
                    ? "bg-blue-500"
                    : "bg-orange-500"
              }`}
            >
              {property.status === "Sale"
                ? "For Sale"
                : property.status === "Rent"
                  ? "For Rent"
                  : property.status}
            </span>

            {/* Like Button - Visible on hover only */}
            <motion.button
              onClick={() => {
                setWishList((prev) =>
                  prev.includes(id)
                    ? prev.filter((item) => item !== id)
                    : [...prev, id],
                );
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isImageHovered ? 1 : 0,
                scale: isImageHovered ? 1 : 0.8,
              }}
              transition={{ duration: 0.2 }}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:scale-110 transition-transform duration-200 z-100"
            >
              <Heart
                className={`w-4 h-4 ${
                  wishList.includes(id)
                    ? "text-red-500 fill-red-500"
                    : "text-gray-600"
                }`}
              />
            </motion.button>

            {/* Price - Always visible */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm text-blue-600 px-3 py-1.5 rounded-lg text-sm font-bold shadow-md z-10">
              {priceDisplay}
            </div>

            {/* HOVER OVERLAY - View Details Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isImageHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/60 flex items-center justify-center z-20"
            >
              <motion.button
              onClick={() =>{ navigate(`/house-details/${id}`); handleScroll()}}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: isImageHovered ? 1 : 0.8,
                  opacity: isImageHovered ? 1 : 0,
                }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg"
              >
                <Eye size={18} />
                View Details
                <TrendingUp size={16} />
              </motion.button>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Location */}
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>
                {location?.name}, {location?.region}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-1 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>

            {/* Features */}
            {features && features.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {features.slice(0, 3).map((feature, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-purple-50 text-purple-600 px-2.5 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            )}

            {/* Divider */}
            <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
              {/* Property details */}
              <div className="flex items-center gap-4 text-gray-600 text-sm">
                <div className="flex items-center gap-1">
                  <Bed className="w-4 h-4 text-blue-600" />
                  <span>{property?.bedrooms || 0}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="w-4 h-4 text-blue-600" />
                  <span>{property?.bathrooms || 0}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Square className="w-4 h-4 text-blue-600" />
                  <span>
                    {property?.size?.value || 0}
                    {property?.size?.unit || "sqft"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertiesCard;