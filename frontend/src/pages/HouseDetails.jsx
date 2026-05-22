import { Link, useParams } from "react-router-dom";
import { useHouseForm } from "../context/HouseContextProvider";
import { useEffect, useState } from "react";
import {
  House,
  ChevronRight,
  Calendar,
  MapPin,
  User,
  Phone,
  Bed,
  Bath,
  Square,
  Home,
  Mail,
  Maximize,
  CheckCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import RelatedProperties from "../components/common/RelatedProperties";

const HouseDetails = () => {
  const { id } = useParams();
  const { properties } = useHouseForm();
  const [houseData, setHouseData] = useState(null);
  const [thumbnail, setThumbnail] = useState("");
  const [makeMessage, setMakeMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMakeMessage((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message sent:", makeMessage);
    alert("Message sent successfully!");
    setMakeMessage({ name: "", email: "", message: "" });
  };

  useEffect(() => {
    const getDataDetails = () => {
      const propertyDetails = properties.find((property) => property.id === id);
      if (propertyDetails) {
        setHouseData(propertyDetails);
        setThumbnail(propertyDetails?.images[0]);
      }
    };
    getDataDetails();
  }, [id, properties]);

  if (!houseData) {
    return (
      <div className="min-h-screen bg-light flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
            <Home size={48} className="text-gray" />
          </div>
          <p className="text-gray text-lg">Loading property details...</p>
        </div>
      </div>
    );
  }

  const isForSale = houseData.property.status === "Sale";

  const priceDisplay = isForSale
    ? `₵${houseData.pricing.amount?.toLocaleString()}`
    : houseData.pricing.perNight
      ? `₵${houseData.pricing.perNight.toLocaleString()}/night`
      : `₵${houseData.pricing.perMonth?.toLocaleString()}/month`;

  return (
    <div className="min-h-screen bg-light">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-layout py-4">
          <div className="flex items-center gap-2 text-sm text-gray flex-wrap">
            <Link
              to="/"
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <House size={14} />
              Home
            </Link>
            <ChevronRight size={14} />
            <Link
              to={`/house-category/${houseData.property.status.toLowerCase()}`}
              className="hover:text-primary transition-colors capitalize"
            >
              {houseData.property.status === "Sale" ? "For Sale" : "For Rent"}
            </Link>
            <ChevronRight size={14} />
            <span className="text-dark font-medium line-clamp-1">
              {houseData.title}
            </span>
          </div>
        </div>
      </div>

      <div className="container-layout py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Images */}
          <div className="lg:w-2/3">
            {/* Main Image */}
            <div className="rounded-lg overflow-hidden shadow-card mb-4">
              <img
                src={thumbnail}
                alt={houseData.title}
                className="w-full h-[450px] object-cover"
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-3">
              {houseData?.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setThumbnail(img)}
                  className={`rounded-md overflow-hidden border-2 transition-all ${
                    thumbnail === img
                      ? "border-primary shadow-md"
                      : "border-gray-200 hover:border-primary"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Property view ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="lg:w-1/3">
            {/* Status & Date */}
            <div className="flex items-center justify-between mb-4">
              <span
                className={`px-3 py-1 text-sm font-semibold text-white rounded-md ${
                  houseData.property.status === "Sale"
                    ? "bg-green-500"
                    : "bg-primary"
                }`}
              >
                {houseData.property.status === "Sale" ? "For Sale" : "For Rent"}
              </span>
              <span className="flex items-center gap-1 text-sm text-gray">
                <Calendar size={14} />
                {new Date().toLocaleDateString()}
              </span>
            </div>

            {/* Price */}
            <div className="mb-4">
              <p className="text-3xl font-bold text-primary">{priceDisplay}</p>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-dark mb-2">
              {houseData.title}
            </h1>

            {/* Location */}
            <div className="flex items-center gap-1 text-gray text-sm mb-4">
              <MapPin size={16} className="text-primary" />
              <span>{houseData.location?.name}</span>
              <span>, {houseData.location?.city}</span>
              <span>, {houseData.location?.region}</span>
            </div>

            {/* Property Details */}
            <div className="bg-gray-100 rounded-md p-4 mb-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Bed size={20} className="text-primary mx-auto mb-1" />
                  <p className="text-sm text-gray">Bedrooms</p>
                  <p className="font-semibold text-dark">
                    {houseData.property?.bedrooms}
                  </p>
                </div>
                <div className="text-center">
                  <Bath size={20} className="text-primary mx-auto mb-1" />
                  <p className="text-sm text-gray">Bathrooms</p>
                  <p className="font-semibold text-dark">
                    {houseData.property?.bathrooms}
                  </p>
                </div>
                <div className="text-center">
                  <Maximize size={20} className="text-primary mx-auto mb-1" />
                  <p className="text-sm text-gray">Size</p>
                  <p className="font-semibold text-dark">
                    {houseData.property?.size?.value}{" "}
                    {houseData.property?.size?.unit}
                  </p>
                </div>
              </div>
            </div>

            {/* Agent Card */}
            <div className="card mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <User size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark">
                    {houseData.agent?.name}
                  </h3>
                  <p className="text-xs text-gray">Property Agent</p>
                </div>
              </div>
              <div className="space-y-2">
                <a
                  href={`tel:${houseData.agent?.phone}`}
                  className="flex items-center gap-2 text-sm text-gray hover:text-primary transition-colors"
                >
                  <Phone size={14} />
                  {houseData.agent?.phone}
                </a>
                <a
                  href={`mailto:${houseData.agent?.email}`}
                  className="flex items-center gap-2 text-sm text-gray hover:text-primary transition-colors"
                >
                  <Mail size={14} />
                  {houseData.agent?.email}
                </a>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex gap-3 mb-6">
              <a
                href={`https://wa.me/${houseData.agent?.phone?.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-md font-semibold hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp size={18} />
                WhatsApp
              </a>
              <a
                href={`tel:${houseData.agent?.phone}`}
                className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-8">
          <div className="card">
            <h2 className="text-xl font-bold text-dark mb-4">Description</h2>
            <p className="text-gray leading-relaxed">{houseData.description}</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-6">
          <div className="card">
            <h2 className="text-xl font-bold text-dark mb-4">Key Features</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {houseData.features?.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-gray">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="mt-6 mb-12">
          <div className="card">
            <h2 className="text-xl font-bold text-dark mb-4">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={makeMessage.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="input-field"
                />
                <input
                  type="email"
                  name="email"
                  value={makeMessage.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="input-field"
                />
              </div>
              <textarea
                name="message"
                value={makeMessage.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                required
                className="input-field resize-none"
              ></textarea>
              <button
                type="submit"
                className="primary-btn w-full md:w-auto px-6 py-3"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Related Properties Section */}
      <div className="">
        <RelatedProperties status={houseData.property.status} />
      </div>
    </div>
  );
};

export default HouseDetails;
