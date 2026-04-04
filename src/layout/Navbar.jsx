import { FiSearch, FiMenu, FiShoppingBag } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useFilter } from "../context/FilterContext";
import { useCart } from "../context/CartContext"; // 1. Cart Context import karein
import { Link } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
  const { query, handleInputChange } = useFilter();
  const { totalItems } = useCart(); // 2. Total items nikaalein

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-4 lg:px-10 py-4 flex items-center justify-between">
      {/* Modern Logo & Toggle */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2.5 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-all active:scale-90"
        >
          <FiMenu size={22} />
        </button>

        {/* Logo ko Link banaya taake Home par ja sakein */}
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200 group-hover:rotate-12 transition-transform">
            <FiShoppingBag className="text-white" size={20} />
          </div>
          <span className="text-xl font-black tracking-tight text-slate-800 hidden sm:block">
            SNEAK<span className="text-indigo-600">X</span>
          </span>
        </Link>
      </div>

      {/* Modern Search Bar */}
      <div className="relative flex-1 max-w-md mx-6 hidden md:block">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Search collections..."
          className="w-full bg-slate-100/50 border border-transparent focus:border-indigo-100 focus:bg-white rounded-2xl py-2.5 pl-12 pr-4 focus:ring-4 focus:ring-indigo-50/50 outline-none text-sm transition-all"
        />
      </div>

      <div className="flex items-center gap-3">
        {/* Dynamic Cart Icon with Badge */}
        <Link
          to="/checkout"
          className="relative p-2.5 bg-slate-100 text-slate-600 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-all active:scale-95"
        >
          <AiOutlineShoppingCart size={24} />

          {/* Badge: Sirf tab dikhega jab items honge */}
          {totalItems > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-indigo-600 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white animate-bounce shadow-sm">
              {totalItems}
            </span>
          )}
        </Link>

        {/* User Avatar */}
        <div className="w-10 h-10 rounded-xl bg-slate-200 border-2 border-white shadow-sm overflow-hidden cursor-pointer hover:border-indigo-200 transition-all">
          <img
            src="https://ui-avatars.com/api/?name=Ahmed+Dev&background=6366f1&color=fff"
            alt="user"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
