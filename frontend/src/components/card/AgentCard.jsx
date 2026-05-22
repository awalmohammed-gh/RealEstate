import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const AgentCard = ({ agent }) => {
  // Get initials for avatar fallback
  const getInitials = (name) => {
    return name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Link to={`/agent-details/${agent?.id}`} onClick={() => scrollTo(0,0)}>
      <div className="card group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
        {/* Agent Image / Avatar */}
        <div className="flex justify-center mb-4">
          {agent?.image ? (
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-colors">
              <img
                src={agent.image}
                alt={agent.name}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center border-4 border-primary/20 group-hover:border-primary transition-colors">
              <span className="text-3xl font-bold text-white">
                {getInitials(agent?.name)}
              </span>
            </div>
          )}
        </div>

        {/* Agent Name */}
        <h3 className="text-xl font-bold text-dark text-center mb-2 group-hover:text-primary transition-colors">
          {agent?.name}
        </h3>

        {/* Agent Title/Badge */}
        <div className="flex justify-center mb-3">
          <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
            Property Agent
          </span>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-center gap-2 text-sm text-gray">
            <Mail size={14} className="text-primary" />
            <span className="truncate">{agent?.email}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-gray">
            <Phone size={14} className="text-primary" />
            <span>{agent?.phone}</span>
          </div>
        </div>
        {/* Contact Buttons */}
        <div className="flex gap-2">
          <a
            href={`https://wa.me/${agent?.phone?.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-colors"
          >
            <FaWhatsapp size={14} />
            WhatsApp
          </a>
          <a
            href={`tel:${agent?.phone}`}
            onClick={(e) => e.stopPropagation()}
            className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-2 rounded-md text-sm font-medium hover:bg-primary-dark transition-colors"
          >
            <Phone size={14} />
            Call
          </a>
        </div>
      </div>
    </Link>
  );
};

export default AgentCard;
