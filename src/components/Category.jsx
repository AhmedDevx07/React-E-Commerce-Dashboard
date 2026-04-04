import { useFilter } from "../context/FilterContext";
import Input from "./Input";

const Category = () => {
  const { handleChange } = useFilter();

  return (
    <div>
      <h2 className="text-lg font-bold mb-4 text-gray-900 border-l-4 border-black pl-3">
        Category
      </h2>
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-3 cursor-pointer group py-1">
          <input
            onChange={handleChange}
            type="radio"
            value=""
            name="test"
            className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-black transition-all"
          />
          <span className="text-gray-600 group-hover:text-black text-sm font-medium italic">
            All Categories
          </span>
        </label>

        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
};

export default Category;
