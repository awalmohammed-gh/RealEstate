import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  Building2,
  CheckCircle,
  ArrowRight,
  Shield,
} from "lucide-react";
import toast from "react-hot-toast";

const AgentLogin = () => {
  const [state, setState] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    condition: false,
  });

  const handleChanges = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (state === "login") {
        // Simulate login API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        toast.success("Login successful!");
        navigate("/agent-sub");
      } else {
        // Simulate signup API call
        if (!formData.condition) {
          toast.error("Please accept the terms and conditions");
          setLoading(false);
          return;
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
        toast.success("Account created successfully!");
        setState("login");
        setFormData({
          fullName: "",
          email: "",
          password: "",
          condition: false,
        });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-light flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Building2 size={28} className="text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-dark">
            Agent <span className="text-primary">Portal</span>
          </h1>
          <p className="text-gray text-sm mt-1">
            {state === "login"
              ? "Sign in to your agent account"
              : "Create your agent account"}
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
          {/* Toggle Buttons */}
          <div className="flex gap-2 mb-6 p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => setState("login")}
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                state === "login"
                  ? "bg-primary text-white shadow-sm"
                  : "text-gray hover:text-dark"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setState("signup")}
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                state === "signup"
                  ? "bg-primary text-white shadow-sm"
                  : "text-gray hover:text-dark"
              }`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name (Signup only) */}
            {state === "signup" && (
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray"
                />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChanges}
                  placeholder="Full Name"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            )}

            {/* Email */}
            <div className="relative">
              <Mail
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChanges}
                placeholder="Email Address"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray"
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChanges}
                placeholder="Password"
                required
                className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray hover:text-dark transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Terms & Conditions (Signup only) */}
            {state === "signup" && (
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="condition"
                  checked={formData.condition}
                  onChange={handleChanges}
                  className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-sm text-gray">
                  I agree to the{" "}
                  <button
                    type="button"
                    className="text-primary hover:underline"
                  >
                    Terms & Conditions
                  </button>
                </span>
              </label>
            )}

            {/* Forgot Password (Login only) */}
            {state === "login" && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-dark transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  {state === "login" ? "Login" : "Create Account"}
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          {/* Agent Info */}
          <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/10">
            <div className="flex items-center gap-2 mb-2">
              <Shield size={16} className="text-primary" />
              <h3 className="text-sm font-semibold text-dark">
                Agent Benefits
              </h3>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-gray">
                <CheckCircle size={12} className="text-green-500" />
                <span>List unlimited properties</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray">
                <CheckCircle size={12} className="text-green-500" />
                <span>Manage inquiries from clients</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray">
                <CheckCircle size={12} className="text-green-500" />
                <span>Access to analytics dashboard</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/")}
            className="text-sm text-gray hover:text-primary transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentLogin;
