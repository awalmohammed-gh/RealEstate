import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHouseForm } from "../context/HouseContextProvider";
import {
  Trash2,
  Calendar,
  MapPin,
  DollarSign,
  Clock,
  ShoppingBag,
  ChevronRight,
  CreditCard,
  Bed,
  Bath,
  Maximize,
  Info,
} from "lucide-react";
import { motion } from "motion/react";

const Booking = () => {
  const { addToBook, properties, removeFromBooking, totalAmount } = useHouseForm();
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    const handleBooking = () => {
      const saveBook = properties.filter((property) => addToBook[property.id]);
      setBookData(saveBook);
    };
    handleBooking();
  }, [addToBook, properties]);

  // const totalPrice = bookData.reduce((total, item) => {
  //   const price =
  //     item.pricing?.amount ||
  //     item.pricing?.perNight ||
  //     item.pricing?.perMonth ||
  //     0;
  //   return total + price;
  // }, 0);

  if (bookData.length === 0) {
    return (
      <div className="min-h-screen bg-light flex items-center justify-center py-20">
        <div className="container-layout">
          <div className="text-center max-w-md mx-auto">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-6">
              <ShoppingBag size={48} className="text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-dark mb-2">
              Your Booking List is Empty
            </h2>
            <p className="text-gray mb-6">
              You haven't added any properties to your booking list yet.
            </p>
            <Link to="/listing">
              <button className="primary-btn inline-flex items-center gap-2">
                Browse Properties
                <ChevronRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light py-12">
      <div className="container-layout">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Calendar size={28} className="text-primary" />
            <h1 className="text-3xl font-bold text-dark">My Bookings</h1>
          </div>
          <p className="text-gray">
            {bookData.length} property{bookData.length !== 1 ? "s" : ""} in your
            booking list
          </p>
          <div className="border-b border-gray-200 mt-4"></div>
        </div>

        {/* Booking Summary Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">
                  {bookData.length}
                </p>
                <p className="text-xs text-gray">Items</p>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">
                  ₵{totalAmount.toLocaleString()}
                </p>
                <p className="text-xs text-gray">Total Amount</p>
              </div>
            </div>
            <Link to="/checkout">
              <button className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                <CreditCard size={18} />
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>

        {/* Booking Items Grid */}
        <div className="grid grid-cols-1 gap-6">
          {bookData.map((item, index) => {
            const isForSale = item.property?.status === "Sale";
            const priceDisplay = isForSale
              ? `₵${item.pricing?.amount?.toLocaleString()}`
              : item.pricing?.perNight
                ? `₵${item.pricing.perNight.toLocaleString()}/night`
                : `₵${item.pricing?.perMonth?.toLocaleString()}/month`;

            return (
              <motion.div
                key={item.id || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="sm:w-48 h-48">
                    <img
                      src={item.images?.[0] || "/placeholder.jpg"}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex-1">
                        {/* Status Badge */}
                        <span
                          className={`inline-block px-2 py-1 text-xs font-semibold text-white rounded-md mb-2 ${
                            item.property?.status === "Sale"
                              ? "bg-green-500"
                              : item.property?.status === "Rent"
                                ? "bg-primary"
                                : "bg-secondary"
                          }`}
                        >
                          {item.property?.status === "Sale"
                            ? "For Sale"
                            : item.property?.status === "Rent"
                              ? "For Rent"
                              : "For Booking"}
                        </span>

                        {/* Title */}
                        <Link to={`/house-details/${item.id}`}>
                          <h3 className="text-lg font-semibold text-dark hover:text-primary transition-colors mb-1">
                            {item.title}
                          </h3>
                        </Link>

                        {/* Location */}
                        <div className="flex items-center gap-1 text-gray text-sm mb-2">
                          <MapPin size={14} className="text-primary" />
                          <span>{item.location?.name || "N/A"}</span>
                          {item.location?.city && (
                            <span>, {item.location.city}</span>
                          )}
                          {item.location?.region && (
                            <span>, {item.location.region}</span>
                          )}
                        </div>

                        {/* Property Details with Lucide Icons */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray mb-3">
                          {item.property?.bedrooms && (
                            <div className="flex items-center gap-1">
                              <Bed size={14} className="text-primary" />
                              <span>{item.property.bedrooms} beds</span>
                            </div>
                          )}
                          {item.property?.bathrooms && (
                            <div className="flex items-center gap-1">
                              <Bath size={14} className="text-primary" />
                              <span>{item.property.bathrooms} baths</span>
                            </div>
                          )}
                          {item.property?.size?.value && (
                            <div className="flex items-center gap-1">
                              <Maximize size={14} className="text-primary" />
                              <span>
                                {item.property.size.value}{" "}
                                {item.property.size.unit}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Price and Actions */}
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary mb-2">
                          {priceDisplay}
                        </p>
                        <button
                          onClick={() => {
                            if(confirm("Are you sure you want to delete this property")){
                              removeFromBooking?.(item.id);
                            }
                          }}
                          className="flex cursor-pointer items-center gap-1 text-red-500 hover:text-red-600 transition-colors text-sm"
                        >
                          <Trash2 size={16} />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Booking Tips */}
        <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
          <div className="flex items-center gap-2 mb-2">
            <Info size={18} className="text-primary" />
            <h3 className="font-semibold text-dark">Booking Information</h3>
          </div>
          <p className="text-sm text-gray">
            Please review your booking details before proceeding to checkout.
            For any questions or special requests, contact the property agent
            directly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
