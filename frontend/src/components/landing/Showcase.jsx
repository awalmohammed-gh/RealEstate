import { Home, KeyRound, Tag, Hotel, MoveRight } from "lucide-react";
import { motion } from "motion/react";

const Showcase = () => {
  const serviceData = [
    {
      id: 1,
      title: "Buy a House",
      description:
        "Find and purchase your dream home from trusted listings with verified details and prices.",
      icon: Home,
    },
    {
      id: 2,
      title: "Rent a Room",
      description:
        "Discover affordable rooms and apartments available for short-term and long-term rent.",
      icon: KeyRound,
    },
    {
      id: 3,
      title: "Sell a House",
      description:
        "List your property and connect with real buyers quickly and safely.",
      icon: Tag,
    },
    {
      id: 4,
      title: "Book a Hotel",
      description:
        "Book comfortable hotels and stays at the best prices for your trips and vacations.",
      icon: Hotel,
    },
  ];

  return (
    <section className="py-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-3">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Our Main <span className="text-blue-600">Focus</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Providing comprehensive real estate solutions tailored to your
              needs
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer"
            >
              {/* Icon */}
              <div className="flex justify-center mb-5">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon
                    size={45}
                    className="text-blue-600 group-hover:text-white transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>

              {/* Learn More Link */}
              <div className="mt-4 text-center">
                <span className="text-blue-600 text-sm font-medium inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More
                 <MoveRight/>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
    </section>
  );
};

export default Showcase;
