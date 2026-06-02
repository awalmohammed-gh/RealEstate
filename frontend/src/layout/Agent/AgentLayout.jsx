import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AgentLayout = () => {
  return (
    <div className="min-h-screen bg-light">
      <Sidebar />
      <main className="lg:ml-72 min-h-screen">
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AgentLayout;
