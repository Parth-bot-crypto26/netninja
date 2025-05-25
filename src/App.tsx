
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CyberTales from "./pages/CyberTales";
import Gamification from "./pages/Gamification";
import AIChatbot from "./pages/AIChatbot";
import PhishingSimulations from "./pages/PhishingSimulations";
import SocialPractice from "./pages/SocialPractice";
import ParentalDashboard from "./pages/ParentalDashboard";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cyber-tales" element={<CyberTales />} />
            <Route path="/gamification" element={<Gamification />} />
            <Route path="/ai-chatbot" element={<AIChatbot />} />
            <Route path="/phishing-simulations" element={<PhishingSimulations />} />
            <Route path="/social-practice" element={<SocialPractice />} />
            <Route path="/parental-dashboard" element={<ParentalDashboard />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
