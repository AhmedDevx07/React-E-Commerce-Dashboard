import Category from "../components/Category";
import Price from "../components/Price";
import Colors from "../components/Colors";
import { FiX } from "react-icons/fi";

const Sidebar = ({ closeMenu }) => {
  return (
    <div className="p-6 h-full flex flex-col">
      {/* Mobile Header */}
      <div className="flex items-center justify-between mb-8 lg:hidden">
        <span className="font-bold text-slate-800">Filters</span>
        <button
          onClick={closeMenu}
          className="p-2 bg-slate-100 rounded-lg active:scale-95 transition-transform"
        >
          <FiX size={20} />
        </button>
      </div>

      {/* Scrollable Area */}
      <div className="space-y-10 overflow-y-auto pr-4 custom-scrollbar">
        <Category />
        <Price />
        <Colors />
      </div>
    </div>
  );
};

export default Sidebar;
