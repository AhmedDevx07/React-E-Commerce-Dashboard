import { useFilter } from "../context/FilterContext";

const Dashboard = () => {
  const { handleClick, selectedCategory } = useFilter();

  // Naye brands yahan add karein
  const brands = [
    "Nike",
    "Adidas",
    "Puma",
    "Vans",
    "New Balance",
    "Asics",
    "Reebok",
    "Skechers",
  ];

  return (
    <div className="px-6 lg:px-10 py-8">
      <h2 className="text-2xl font-black text-slate-800 mb-6 tracking-tight">
        Top Collections
      </h2>

      {/* Horizontal Scroll for Mobile: 'flex-nowrap overflow-x-auto' add kiya hai */}
      <div className="flex flex-wrap lg:flex-wrap gap-4 no-scrollbar">
        <button
          onClick={handleClick}
          value=""
          className={`px-8 py-3.5 rounded-2xl text-sm font-bold cursor-pointer transition-all shadow-sm active:scale-95 whitespace-nowrap ${!selectedCategory ? "bg-indigo-600 text-white shadow-indigo-200 shadow-xl" : "bg-white text-slate-500 hover:bg-slate-50 border border-slate-100"}`}
        >
          All Drops
        </button>

        {brands.map((brand) => (
          <button
            key={brand}
            onClick={handleClick}
            value={brand}
            className={`px-8 py-3.5 rounded-2xl text-sm font-bold cursor-pointer transition-all shadow-sm active:scale-95 whitespace-nowrap ${selectedCategory === brand ? "bg-indigo-600 text-white shadow-indigo-200 shadow-xl" : "bg-white text-slate-500 hover:bg-slate-50 border border-slate-100"}`}
          >
            {brand}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
