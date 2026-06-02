import { Users } from "lucide-react";
import { motion } from "motion/react";
import AgentCard from "../../components/card/AgentCard";
import { useHouseForm } from "../../context/HouseContextProvider";

const Agents = () => {
  const { properties } = useHouseForm();

  const agentProperty = properties.filter((property, index, array) => {
    return (
      index === array.findIndex((item) => item.agent?.id === property.agent?.id)
    );
  });

  return (
    <div className="min-h-screen bg-light">
      {/* Header Banner */}
      <div
        className="relative flex items-center justify-center bg-cover bg-center w-full h-[35vh]"
        style={{ backgroundImage: `url(/banner1.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
            <Users size={28} className="text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Meet Our <span className="text-primary">Expert Agents</span>
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Professional real estate agents ready to help you find your dream
            property
          </p>
        </div>
      </div>

      {/* Agents Grid */}
      <div className="container-layout py-16">
        {agentProperty.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {agentProperty.map((property, index) => (
              <motion.div
                key={property.agent?.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AgentCard agent={property.agent} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-gray-200">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
              <Users size={32} className="text-gray" />
            </div>
            <h3 className="text-xl font-semibold text-dark mb-2">
              No Agents Found
            </h3>
            <p className="text-gray">
              Agent information is currently unavailable.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Agents;
