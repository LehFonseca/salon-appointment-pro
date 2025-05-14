
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AppointmentsPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to the profile page with the appointments tab active
    navigate("/profile", { state: { activeTab: "appointments" } });
  }, [navigate]);
  
  return <div className="min-h-screen bg-glam-900"></div>;
};

export default AppointmentsPage;
