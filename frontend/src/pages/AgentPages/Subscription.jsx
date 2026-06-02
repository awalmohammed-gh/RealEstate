import { useNavigate } from "react-router-dom";
import { useHouseForm } from "../../context/HouseContextProvider";
import {
  Crown,
  CheckCircle,
  Shield,
  Users,
  CreditCard,
  ArrowRight,
  Rocket,
  TrendingUp,
} from "lucide-react";
import toast from "react-hot-toast";
import { useState } from "react";

const Subscription = () => {
  const { plans } = useHouseForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleToBecomeAgent = async (plan) => {
    try {
      setLoading(true);
      navigate("/agent/dashboard", { state: { selectedPlan: plan } });
    } catch (error) {
      toast.error("Failed to subscribe", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const getPlanIcon = (title) => {
    switch (title?.toLowerCase()) {
      case "starter":
        return <Rocket size={28} className="text-blue-500" />;
      case "growth":
        return <TrendingUp size={28} className="text-purple-500" />;
      default:
        return <Shield size={24} className="text-primary" />;
    }
  };

  const getPlanColor = (title) => {
    switch (title?.toLowerCase()) {
      case "starter":
        return "from-blue-500 to-blue-600";
      case "growth":
        return "from-purple-500 to-purple-600";
      default:
        return "from-primary to-primary-dark";
    }
  };

  const getPriceAmount = (price) => {
    return price?.replace("GHS", "").trim() || "0";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-light flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h3 className="text-lg font-semibold text-dark mb-1">
            Processing...
          </h3>
          <p className="text-sm text-gray">
            Please wait while we set up your subscription
          </p>
        </div>
      </div>
    );
  }

  if (plans?.length === 0) {
    return (
      <div className="min-h-screen bg-light flex items-center justify-center py-20">
        <div className="text-center max-w-md mx-auto">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-6">
            <Crown size={48} className="text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-dark mb-2">
            No Plans Available
          </h2>
          <p className="text-gray mb-6">
            Subscription plans are currently unavailable. Please check back
            later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light py-16">
      <div className="container-layout">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-dark mb-3">
            Become an <span className="text-primary">Agent</span>
          </h1>
          <p className="text-gray max-w-2xl mx-auto">
            Choose the perfect subscription plan to start listing properties and
            reach more customers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 text-sm text-gray">
              <CheckCircle size={16} className="text-green-500" />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray">
              <CheckCircle size={16} className="text-green-500" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray">
              <CheckCircle size={16} className="text-green-500" />
              <span>24/7 support</span>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.id || index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.id === "growth" ? "ring-2 ring-primary relative" : ""
              }`}
            >
              {plan.id === "growth" && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                    Best Value
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div
                className={`bg-linear-to-r ${getPlanColor(plan.title)} p-6 text-white`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {getPlanIcon(plan.title)}
                    <h2 className="text-2xl font-bold">{plan.title}</h2>
                  </div>
                </div>
                <p className="text-white/80 text-sm">{plan.description}</p>
              </div>

              {/* Plan Content */}
              <div className="p-6">
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-dark">
                      ₵{getPriceAmount(plan.price)}
                    </span>
                    <span className="text-gray text-sm">/ {plan.name}</span>
                  </div>
                  <p className="text-xs text-gray mt-1">One-time payment</p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  <h3 className="font-semibold text-dark mb-3">
                    What's included:
                  </h3>
                  <div className="space-y-2">
                    {plan.features?.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle
                          size={16}
                          className="text-green-500 mt-0.5 shrink-0"
                        />
                        <span className="text-sm text-gray">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subscribe Button */}
                <button
                  onClick={() => handleToBecomeAgent(plan)}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.id === "growth"
                      ? "bg-linear-to-r from-purple-500 to-purple-600 text-white hover:shadow-lg"
                      : "bg-linear-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg"
                  }`}
                >
                  <CreditCard size={18} />
                  Subscribe Now
                  <ArrowRight size={16} />
                </button>

                {/* Cancel Info */}
                <p className="text-center text-xs text-gray mt-4">
                  Cancel anytime • No commitment
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl border border-gray-200 p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Users size={20} className="text-primary" />
              <h3 className="font-semibold text-dark">Need help choosing?</h3>
            </div>
            <p className="text-sm text-gray mb-3">
              Contact our support team for assistance in selecting the right
              plan for your needs.
            </p>
            <button className="text-primary hover:text-primary-dark text-sm font-medium inline-flex items-center gap-1">
              Contact Support
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
