import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useHouseForm } from "../context/HouseContextProvider";
import PropertiesCard from "../components/card/PropertiesCard";
import { Heart, Home, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const Wishlist = () => {
  const { properties, wishList, removeFromWishlist } = useHouseForm();

  const wishlistData = useMemo(() => {
    return properties.filter((property) => wishList?.includes(property.id));
  }, [properties, wishList]);

  if (wishlistData.length === 0) {
    return (
      <div className="min-h-screen bg-light flex items-center justify-center py-20">
        <div className="container-layout">
          <div className="text-center max-w-md mx-auto">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-6">
              <Heart size={48} className="text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-dark mb-2">
              Your Wishlist is Empty
            </h2>
            <p className="text-gray mb-6">
              Save your favorite properties here by clicking the heart icon on
              any property card.
            </p>
            <Link to="/listing">
              <button className="primary-btn inline-flex items-center gap-2">
                Browse Properties
                <ArrowRight size={18} />
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
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Heart size={28} className="text-primary fill-primary/20" />
                <h1 className="text-3xl font-bold text-dark">My Wishlist</h1>
              </div>
              <p className="text-gray">
                {wishlistData.length} property
                {wishlistData.length !== 1 ? "s" : ""} saved to your wishlist
              </p>
            </div>

            {/* Clear All Button */}
            {wishlistData.length > 1 && (
              <button
                onClick={() => {
                  if (window.confirm("Remove all properties from wishlist?")) {
                    wishlistData.forEach((item) =>
                      removeFromWishlist?.(item.id),
                    );
                  }
                }}
                className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors"
              >
                <Trash2 size={18} />
                Clear All
              </button>
            )}
          </div>

          {/* Divider */}
          <div className="border-b border-gray-200 mt-4"></div>
        </div>

        {/* Wishlist Stats Bar */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">
                  {wishlistData.length}
                </p>
                <p className="text-xs text-gray">Saved Items</p>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">
                  ₵
                  {wishlistData
                    .reduce(
                      (total, property) =>
                        total + (property.pricing?.amount || 0),
                      0,
                    )
                    .toLocaleString()}
                </p>
                <p className="text-xs text-gray">Total Value</p>
              </div>
            </div>

            <Link to="/listing">
              <button className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors text-sm font-medium">
                Browse More Properties
                <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistData.map((wish, index) => (
            <motion.div
              key={wish.id || index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <PropertiesCard house={wish} />
            </motion.div>
          ))}
        </div>

        {/* Empty State at bottom if less than 4 items */}
        {wishlistData.length < 4 && wishlistData.length > 0 && (
          <div className="mt-12 p-8 bg-white rounded-xl border border-gray-200 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-3">
              <ShoppingBag size={24} className="text-gray" />
            </div>
            <h3 className="text-lg font-semibold text-dark mb-1">
              Looking for more?
            </h3>
            <p className="text-gray text-sm mb-4">
              Check out more properties you might like
            </p>
            <Link to="/listing">
              <button className="text-primary hover:text-primary-dark font-medium inline-flex items-center gap-1">
                Browse All Properties
                <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
