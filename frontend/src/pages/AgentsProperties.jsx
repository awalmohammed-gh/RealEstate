import { useParams, Link } from "react-router-dom";
import { useHouseForm } from "../context/HouseContextProvider";
import { useMemo } from "react";
import PropertiesCard from "../components/card/PropertiesCard";
import {
  User,
  Mail,
  Phone,
  Home,
  ChevronRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const AgentsProperties = () => {
  const { id } = useParams();
  const { properties } = useHouseForm();

  const agentDetails = useMemo(() => {
    return properties.find((property) => property.agent?.id === id);
  }, [properties, id]);

  const filteredProperties = properties.filter(
    (property) => property.agent?.id === id,
  );

  // Get initials for avatar
  const getInitials = (name) => {
    return name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  if (!agentDetails) {
    return (
      <div className="min-h-screen bg-light flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
            <User size={48} className="text-gray" />
          </div>
          <p className="text-gray text-lg">Agent not found</p>
          <Link
            to="/agents"
            className="text-primary hover:underline mt-2 inline-block"
          >
            Back to Agents
          </Link>
        </div>
      </div>
    );
  }

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
              <Home size={14} />
              Home
            </Link>
            <ChevronRight size={14} />
            <Link to="/agent" className="hover:text-primary transition-colors">
              Agents
            </Link>
            <ChevronRight size={14} />
            <span className="text-dark font-medium">
              {agentDetails.agent?.name}
            </span>
          </div>
        </div>
      </div>

      {/* Agent Profile Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-layout py-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Agent Avatar */}
            <div className="shrink-0">
              {agentDetails.agent?.image ? (
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                  <img
                    src={agentDetails.agent.image}
                    alt={agentDetails.agent.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-32 h-32 rounded-full bg-linear-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg">
                  <span className="text-4xl font-bold text-white">
                    {getInitials(agentDetails.agent?.name)}
                  </span>
                </div>
              )}
            </div>

            {/* Agent Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2 flex-wrap">
                <h1 className="text-2xl md:text-3xl font-bold text-dark">
                  {agentDetails.agent?.name}
                </h1>
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                  Property Agent
                </span>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-4 text-gray mt-3">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-primary" />
                  <a
                    href={`mailto:${agentDetails.agent?.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {agentDetails.agent?.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-primary" />
                  <a
                    href={`tel:${agentDetails.agent?.phone}`}
                    className="hover:text-primary transition-colors"
                  >
                    {agentDetails.agent?.phone}
                  </a>
                </div>
              </div>

              {/* Agent Stats */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">
                    {filteredProperties.length}
                  </p>
                  <p className="text-xs text-gray">Properties Listed</p>
                </div>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
              <a
                href={`https://wa.me/${agentDetails.agent?.phone?.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp size={18} />
                WhatsApp
              </a>
              <a
                href={`tel:${agentDetails.agent?.phone}`}
                className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Section */}
      <div className="container-layout py-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-dark">
            Properties by{" "}
            <span className="text-primary">{agentDetails.agent?.name}</span>
          </h2>
          <p className="text-gray mt-1">
            {filteredProperties.length} property
            {filteredProperties.length !== 1 ? "s" : ""} listed by this agent
          </p>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <PropertiesCard house={property} key={property.id} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-gray-200">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
              <Home size={32} className="text-gray" />
            </div>
            <h3 className="text-xl font-semibold text-dark mb-2">
              No Properties Found
            </h3>
            <p className="text-gray">
              This agent hasn't listed any properties yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentsProperties;
