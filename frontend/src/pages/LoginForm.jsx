import { useState } from "react";
import { useHouseForm } from "../context/HouseContextProvider";
import { X, Mail, Lock, User, Eye, EyeOff, User2 } from "lucide-react";
import { loginAccount, registerAccount } from "../api/authApis";
import toast from "react-hot-toast";

const LoginForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    condition: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { currentState, setCurrentState, setIsLoggedIn, userData } = useHouseForm();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

 const handleSubmit = async (e) => {
   e.preventDefault();

   try {
     setIsLoading(true);

     if (currentState === "login") {
       const res = await loginAccount(formData);
       userData()
       toast.success(res?.data?.message || "Login successful");
       setIsLoggedIn(true);
     } else {
       const res = await registerAccount(formData);
       userData();
       toast.success(res?.data?.message || "Account created successfully");
       setIsLoggedIn(true);
     }

     onClose();
   } catch (error) {
     console.error(error);

     toast.error(error?.response?.data?.message || "Something went wrong");
   } finally {
     setIsLoading(false);
   }
 };

  const getInitials = () => {
    if (currentState === "signup" && formData.firstName && formData.lastName) {
      return `${formData.firstName[0]}${formData.lastName[0]}`.toUpperCase();
    }
    return <User2 className="text-white"size={40}/>;
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4 animate-fadeIn">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-slideUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center text-gray-500 hover:text-gray-700"
        >
          <X size={18} />
        </button>

        {/* Header with Avatar */}
        <div className="bg-linear-to-br from-primary to-primary-dark px-8 pt-8 pb-12 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
            <span className="text-3xl text-white">{getInitials()}</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-1">
            {currentState === "login" ? "Welcome Back!" : "Create Account"}
          </h2>
          <p className="text-white/80 text-sm">
            {currentState === "login"
              ? "Login to continue to your account"
              : "Fill in your details to get started"}
          </p>
        </div>

        {/* Form */}
        <div className="px-8 py-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields (Signup only) */}
            {currentState === "signup" && (
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray"
                  />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    required
                    className="input-field pl-10"
                  />
                </div>
                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    required
                    className="input-field pl-10"
                  />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div className="relative">
              <Mail
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                required
                className="input-field pl-10"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <Lock
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray"
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="input-field pl-10 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray hover:text-primary transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Terms & Conditions (Signup only) */}
            {currentState === "signup" && (
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="condition"
                  checked={formData.condition}
                  onChange={handleChange}
                  required
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
            {currentState === "login" && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={
                isLoading || (currentState === "signup" && !formData.condition)
              }
              className="primary-btn w-full py-3 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  {currentState === "login"
                    ? "Logging in..."
                    : "Creating account..."}
                </div>
              ) : currentState === "login" ? (
                "Login"
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          {/* Toggle between Login and Signup */}
          <div className="mt-6 text-center">
            {currentState === "login" ? (
              <p className="text-sm text-gray">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => setCurrentState("signup")}
                  className="text-primary font-semibold hover:underline"
                >
                  Sign up
                </button>
              </p>
            ) : (
              <p className="text-sm text-gray">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setCurrentState("login")}
                  className="text-primary font-semibold hover:underline"
                >
                  Login
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
