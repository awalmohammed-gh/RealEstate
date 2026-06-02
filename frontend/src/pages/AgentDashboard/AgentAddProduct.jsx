import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Plus,
  Trash2,
  Upload,
  X,
  MapPin,
  Home,
  DollarSign,
  Image as ImageIcon,
  Building2,
  Bed,
  Bath,
  Maximize,
  Tag,
  FileText,
  Save,
} from "lucide-react";
import toast from "react-hot-toast";

const AgentAddProduct = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [featureInput, setFeatureInput] = useState("");

  const [propertyData, setPropertyData] = useState({
    title: "",
    description: "",
    pricing: {
      amount: "",
      currency: "GHS",
    },
    location: {
      name: "",
      city: "",
      region: "",
      address: "",
    },
    property: {
      type: "",
      status: "Sale",
      bedrooms: "",
      bathrooms: "",
      size: {
        value: "",
        unit: "sqm",
      },
    },
    features: [],
  });

  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([]);
  const MAX_IMAGES = 10;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePricingChange = (e) => {
    const { name, value } = e.target;
    setPropertyData((prev) => ({
      ...prev,
      pricing: {
        ...prev.pricing,
        [name]: value,
      },
    }));
  };

  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setPropertyData((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        [name]: value,
      },
    }));
  };

  const handlePropertyChange = (e) => {
    const { name, value } = e.target;
    setPropertyData((prev) => ({
      ...prev,
      property: {
        ...prev.property,
        [name]: value,
      },
    }));
  };

  const handleSizeChange = (e) => {
    const { name, value } = e.target;
    setPropertyData((prev) => ({
      ...prev,
      property: {
        ...prev.property,
        size: {
          ...prev.property.size,
          [name]: value,
        },
      },
    }));
  };

  const handleImages = (e) => {
    const files = Array.from(e.target.files);
    setImages((prev) => {
      const combined = [...prev, ...files];
      if (combined.length > MAX_IMAGES) {
        toast.error(`Maximum ${MAX_IMAGES} images allowed`);
        return combined.slice(0, MAX_IMAGES);
      }
      return combined;
    });
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, img) => img !== index));
    toast.success("Image removed");
  };

  const addFeature = () => {
    if (featureInput.trim() === "") return;
    if (propertyData.features.length >= 15) {
      toast.error("Maximum 15 features allowed");
      return;
    }
    setPropertyData((prev) => ({
      ...prev,
      features: [...prev.features, featureInput.trim()],
    }));
    setFeatureInput("");
  };

  const removeFeature = (index) => {
    setPropertyData((prev) => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate required fields
      if (!propertyData.title) {
        toast.error("Please enter property title");
        setLoading(false);
        return;
      }
      if (!propertyData.pricing.amount) {
        toast.error("Please enter price");
        setLoading(false);
        return;
      }
      if (images.length === 0) {
        toast.error("Please upload at least one image");
        setLoading(false);
        return;
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Property added successfully!");
      navigate("/agent/my-properties");
    } catch (error) {
      toast.error("Failed to add property");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const urls = images.map((img) => (img ? URL.createObjectURL(img) : null));
    setPreview(urls);

    return () => {
      urls.forEach((url) => {
        if (url) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, [images]);

  return (
    <div className="min-h-screen bg-light py-8">
      <div className="container-layout">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Building2 size={28} className="text-primary" />
            <h1 className="text-3xl font-bold text-dark">Add New Property</h1>
          </div>
          <p className="text-gray">
            Fill in the details below to list your property
          </p>
          <div className="border-b border-gray-200 mt-4"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
              <FileText size={20} className="text-primary" />
              Basic Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-dark mb-1">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={propertyData.title}
                  onChange={handleChange}
                  placeholder="e.g., Luxury Apartment in East Legon"
                  required
                  className="input-field"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-dark mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={propertyData.description}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Describe your property in detail..."
                  className="input-field resize-none"
                />
              </div>
            </div>
          </div>

          {/* Pricing Information */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
              <DollarSign size={20} className="text-primary" />
              Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-dark mb-1">
                  Amount <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="amount"
                  value={propertyData.pricing.amount}
                  onChange={handlePricingChange}
                  placeholder="e.g., 250000"
                  required
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-1">
                  Currency
                </label>
                <select
                  name="currency"
                  value={propertyData.pricing.currency}
                  onChange={handlePricingChange}
                  className="input-field"
                >
                  <option value="GHS">GHS (₵)</option>
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Location Information */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
              <MapPin size={20} className="text-primary" />
              Location
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-dark mb-1">
                  Area Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={propertyData.location.name}
                  onChange={handleLocationChange}
                  placeholder="e.g., East Legon"
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-1">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={propertyData.location.city}
                  onChange={handleLocationChange}
                  placeholder="e.g., Accra"
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-1">
                  Region
                </label>
                <input
                  type="text"
                  name="region"
                  value={propertyData.location.region}
                  onChange={handleLocationChange}
                  placeholder="e.g., Greater Accra"
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-1">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={propertyData.location.address}
                  onChange={handleLocationChange}
                  placeholder="e.g., 123 Main Street"
                  className="input-field"
                />
              </div>
            </div>
          </div>

          {/* Property Details */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
              <Home size={20} className="text-primary" />
              Property Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-dark mb-1">
                  Property Type
                </label>
                <select
                  name="type"
                  value={propertyData.property.type}
                  onChange={handlePropertyChange}
                  className="input-field"
                >
                  <option value="">Select Type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                  <option value="Villa">Villa</option>
                  <option value="Townhouse">Townhouse</option>
                  <option value="Land">Land</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-1">
                  Status
                </label>
                <select
                  name="status"
                  value={propertyData.property.status}
                  onChange={handlePropertyChange}
                  className="input-field"
                >
                  <option value="Sale">For Sale</option>
                  <option value="Rent">For Rent</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-1 flex items-center gap-1">
                  <Bed size={14} /> Bedrooms
                </label>
                <input
                  type="number"
                  name="bedrooms"
                  value={propertyData.property.bedrooms}
                  onChange={handlePropertyChange}
                  placeholder="e.g., 3"
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-1 flex items-center gap-1">
                  <Bath size={14} /> Bathrooms
                </label>
                <input
                  type="number"
                  name="bathrooms"
                  value={propertyData.property.bathrooms}
                  onChange={handlePropertyChange}
                  placeholder="e.g., 2"
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-1 flex items-center gap-1">
                  <Maximize size={14} /> Size Value
                </label>
                <input
                  type="number"
                  name="value"
                  value={propertyData.property.size.value}
                  onChange={handleSizeChange}
                  placeholder="e.g., 200"
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-1">
                  Size Unit
                </label>
                <select
                  name="unit"
                  value={propertyData.property.size.unit}
                  onChange={handleSizeChange}
                  className="input-field"
                >
                  <option value="sqm">Square Meters (sqm)</option>
                  <option value="sqft">Square Feet (sqft)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
              <Tag size={20} className="text-primary" />
              Features & Amenities
            </h2>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                placeholder="e.g., Swimming Pool, Parking, Garden..."
                className="input-field flex-1"
                onKeyPress={(e) => e.key === "Enter" && addFeature()}
              />
              <button
                type="button"
                onClick={addFeature}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                <Plus size={20} />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {propertyData.features.map((feature, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {feature}
                  <button
                    type="button"
                    onClick={() => removeFeature(index)}
                    className="hover:text-red-500"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
              <ImageIcon size={20} className="text-primary" />
              Property Images
            </h2>
            <div className="mb-4">
              <label className="block w-full p-8 border-2 border-dashed border-gray-300 rounded-xl text-center cursor-pointer hover:border-primary transition-colors">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImages}
                  className="hidden"
                />
                <Upload size={40} className="mx-auto text-gray mb-2" />
                <p className="text-gray">Click or drag to upload images</p>
                <p className="text-xs text-gray mt-1">
                  Max {MAX_IMAGES} images • PNG, JPG, JPEG
                </p>
              </label>
            </div>

            {/* Image Preview */}
            {preview.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {preview.map((url, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={url}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 pb-8">
            <button
              type="button"
              onClick={() => navigate("/agent/my-properties")}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray rounded-xl font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Save size={18} />
                  Save Property
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AgentAddProduct;
