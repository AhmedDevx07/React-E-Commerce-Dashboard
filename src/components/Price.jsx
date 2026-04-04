import { useFilter } from "../context/FilterContext";
import Input from "./Input";

const Price = () => {
  const { handleChange } = useFilter();

  return (
    <div>
      <h2 className="text-lg font-bold mb-4 text-gray-900 border-l-4 border-black pl-3">
        Price Range
      </h2>
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-3 cursor-pointer group py-1">
          <input
            onChange={handleChange}
            type="radio"
            value=""
            name="test2"
            className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-black transition-all"
          />
          <span className="text-gray-600 group-hover:text-black text-sm font-medium italic">
            Any Price
          </span>
        </label>

        <Input
          handleChange={handleChange}
          value={50}
          title="Under $50"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={100}
          title="$50 - $100"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={150}
          title="$100 - $150"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={200}
          title="Over $150"
          name="test2"
        />
      </div>
    </div>
  );
};

export default Price;
