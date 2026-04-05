import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Silder";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout"; // Apna naya checkout page import karein

// Aik chota component banayein jo check karega ke hum kis page par hain
const AppContent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Check karein ke kya hum checkout page par hain?
  const isCheckoutPage = location.pathname === "/checkout";

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* Sidebar: Sirf tab dikhayein jab checkout page NA HO */}
      {!isCheckoutPage && (
        <aside
          className={`
          fixed lg:sticky top-0 z-[60] h-screen bg-white border-r border-slate-100 transition-all duration-300 overflow-y-auto
          ${isSidebarOpen ? "left-0 w-72" : "-left-full lg:left-0 lg:w-72"}
        `}
        >
          <Sidebar closeMenu={() => setIsSidebarOpen(false)} />
        </aside>
      )}

      {/* Overlay for Mobile (Sirf Home page ke liye) */}
      {!isCheckoutPage && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[55] lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <main className="flex-1 flex flex-col min-w-0">
        {/* Navbar: Isay aap dono pages par rakh sakte hain ya checkout par simplify kar sakte hain */}
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <div className="flex-1 overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
