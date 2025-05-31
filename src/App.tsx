
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import Index from "./pages/Index";
import SalonsPage from "./pages/SalonsPage";
import SalonDetailsPage from "./pages/SalonDetailsPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import BusinessDashboardPage from "./pages/BusinessDashboardPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/salons" element={<SalonsPage />} />
            <Route path="/salon/:id" element={<SalonDetailsPage />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
            <Route path="/business-dashboard" element={<BusinessDashboardPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
        <Sonner />
      </AppProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
