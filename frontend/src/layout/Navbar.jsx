import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, Heart, User, Menu, X } from "lucide-react";
import { useHouseForm } from "../context/HouseContextProvider";

const Navbar = ({ onOpen }) => {
  const {
    isLoggedIn,
    setIsLoggedIn,
    setCurrentState,
    wishList,
    logoutUser,
    user,
  } = useHouseForm();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Listing", path: "/listing" },
    {
      id: 3,
      name: "Category",
      subLink: [
        { id: 1, name: "Rent", path: "/house-category/rent" },
        { id: 2, name: "Sale", path: "/house-category/sale" },
        { id: 3, name: "Booking", path: "/house-category/booking" },
      ],
    },
    { id: 4, name: "Booking", path: "/booking" },
    { id: 5, name: "Agent", path: "/agent" },
    { id: 6, name: "Contact", path: "/contact" },
    { id: 7, name: "About", path: "/about" },
  ];

  // SAFE initials function
  const getInitials = (firstName = "", lastName = "") => {
    const first = firstName?.charAt(0) || "";
    const last = lastName?.charAt(0) || "";
    return (first + last).toUpperCase() || "U";
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-gray-800">
            Stay<span className="text-blue-600">Nest</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.id} className="relative group">
                {link.subLink ? (
                  <div>
                    <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors font-medium">
                      {link.name}
                      <ChevronDown
                        size={16}
                        className="group-hover:rotate-180 transition-transform duration-200"
                      />
                    </button>

                    <div className="absolute top-8 left-0 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {link.subLink.map((sub) => (
                          <NavLink
                            key={sub.id}
                            to={sub.path}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                          >
                            {sub.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `font-medium transition-colors ${
                        isActive
                          ? "text-blue-600"
                          : "text-gray-600 hover:text-blue-600"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-8">
            {/* Wishlist */}
            <NavLink to="/wishlist" className="relative">
              <Heart
                size={22}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                {wishList?.length || 0}
              </span>
            </NavLink>

            {/* User Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
              >
                {user ? (
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-semibold">
                    {getInitials(user?.firstName, user?.lastName)}
                  </div>
                ) : (
                  <User size={22} />
                )}

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    isUserDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  {user ? (
                    <div className="py-2">
                      {/* User Info */}
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-semibold text-gray-800">
                          {user?.firstName} {user?.lastName}
                        </p>
                        <p className="text-xs text-gray-500">{user?.email}</p>
                      </div>

                      <NavLink
                        to="/booking"
                        onClick={() => setIsUserDropdownOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                      >
                        My Bookings
                      </NavLink>

                      <NavLink
                        to="/account"
                        onClick={() => setIsUserDropdownOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                      >
                        My Account
                      </NavLink>

                      <NavLink
                        to="/agent-login"
                        onClick={() => setIsUserDropdownOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                      >
                        Become an Agent
                      </NavLink>

                      <div className="border-t border-gray-100 my-1" />

                      <NavLink
                        to="/help"
                        onClick={() => setIsUserDropdownOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                      >
                        Help Center
                      </NavLink>

                      <button
                        onClick={() => {
                          logoutUser();
                          setIsUserDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50"
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <div className="py-4 px-4">
                      <button
                        onClick={() => {
                          onOpen();
                          setCurrentState("login");
                          setIsUserDropdownOpen(false);
                        }}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 text-sm font-medium"
                      >
                        Login
                      </button>

                      <button
                        onClick={() => {
                          setCurrentState("signup");
                          onOpen();
                          setIsUserDropdownOpen(false);
                        }}
                        className="w-full border-2 border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 text-sm font-medium mt-2"
                      >
                        Sign Up
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <div key={link.id}>
                {link.subLink ? (
                  <div>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.id ? null : link.id,
                        )
                      }
                      className="flex justify-between w-full px-4 py-2 text-gray-600"
                    >
                      {link.name}
                      <ChevronDown
                        size={16}
                        className={`${
                          openDropdown === link.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {openDropdown === link.id && (
                      <div className="pl-6">
                        {link.subLink.map((sub) => (
                          <NavLink
                            key={sub.id}
                            to={sub.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                          >
                            {sub.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-gray-600 hover:text-blue-600"
                  >
                    {link.name}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
