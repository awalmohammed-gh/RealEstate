import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Send } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribed(true);
    setEmail("");

    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="py-16 bg-primary mt-15">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
            <Mail size={28} className="text-white" />
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-white mb-2">
            Subscribe to Our Newsletter
          </h2>

          {/* Description */}
          <p className="text-blue-100 mb-6">
            Get the latest updates and offers straight to your inbox
          </p>

          {/* Success Message */}
          {isSubscribed && (
            <div className="mb-4 p-3 bg-green-500 text-white rounded-lg">
              Thanks for subscribing!
            </div>
          )}

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-lg outline-none text-gray-800 border-gray-300 border"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              Subscribe
              <Send size={16} />
            </button>
          </form>
        </motion.div>
    </section>
  );
};

export default Newsletter;
