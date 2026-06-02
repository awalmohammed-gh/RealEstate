import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  PlusCircle,
  Building2,
  MessageCircle,
  CreditCard,
  User,
  ChevronRight,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    {
      id: 1,
      name: "Overview",
      path: "/agent/dashboard",
      icon: LayoutDashboard,
    },
    {
      id: 2,
      name: "Add Property",
      path: "/agent/add-property",
      icon: PlusCircle,
    },
    {
      id: 3,
      name: "My Properties",
      path: "/agent/my-properties",
      icon: Building2,
    },
    {
      id: 4,
      name: "Inquiries",
      path: "/agent/inquiries",
      icon: MessageCircle,
    },
    {
      id: 5,
      name: "Subscription",
      path: "/agent/subscription",
      icon: CreditCard,
    },
    {
      id: 6,
      name: "Profile",
      path: "/agent/profile",
      icon: User,
    },
  ];

  const handleLinkClick = () => {
    setIsMobileOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("agentToken");
    window.location.href = "/";
  };

  const sidebarJSX = (
    <div className="flex flex-col h-full">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <Building2 size={20} className="text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-dark">
              Stay<span className="text-primary">Nest</span>
            </h2>
            <p className="text-xs text-gray">Agent Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 py-6 px-4 overflow-y-auto">
        <div className="space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-gray hover:bg-gray-100 hover:text-dark"
                }`
              }
            >
              <div className="flex items-center gap-3">
                <link.icon size={18} />
                <span>{link.name}</span>
              </div>
              {({ isActive }) =>
                isActive && <ChevronRight size={16} className="text-primary" />
              }
            </NavLink>
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all duration-200"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
      >
        {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 bg-white border-r border-gray-200 fixed left-0 top-0 h-screen overflow-y-auto z-30">
        {sidebarJSX}
      </aside>

      {/* Mobile Sidebar */}
      {isMobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileOpen(false)}
          />
          {/* Sidebar */}
          <aside className="fixed left-0 top-0 w-72 h-full bg-white z-50 shadow-xl lg:hidden animate-slideIn">
            {sidebarJSX}
          </aside>
        </>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Sidebar;
