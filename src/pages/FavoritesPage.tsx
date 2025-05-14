
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FavoritesPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to the profile page with the favorites tab active
    navigate("/profile", { state: { activeTab: "favorites" } });
  }, [navigate]);
  
  return <div className="min-h-screen bg-glam-900"></div>;
};

export default FavoritesPage;
