const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="flex items-center justify-between gap-3 cursor-pointer group py-2 px-3 rounded-xl hover:bg-slate-50 transition-all">
      <div className="flex items-center gap-3">
        <div className="relative flex items-center justify-center">
          <input
            onChange={handleChange}
            type="radio"
            value={value}
            name={name}
            className="peer appearance-none w-5 h-5 border-2 border-slate-200 rounded-lg checked:border-indigo-600 transition-all"
          />
          <div className="absolute w-2 h-2 bg-indigo-600 rounded-sm scale-0 peer-checked:scale-100 transition-all" />
        </div>
        <span className="text-slate-500 group-hover:text-slate-900 transition-colors text-sm font-medium">
          {title}
        </span>
      </div>
      {color && (
        <div
          className="w-3 h-3 rounded-full border border-slate-100 shadow-sm"
          style={{ backgroundColor: color }}
        />
      )}
    </label>
  );
};
export default Input;
