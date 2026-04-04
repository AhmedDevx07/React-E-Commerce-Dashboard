import { useFilter } from "../context/FilterContext";
import Input from "./Input";

const Colors = () => {
  const { handleChange } = useFilter();

  return (
    <div>
      <h2 className="text-lg font-bold mb-4 text-gray-900 border-l-4 border-black pl-3">
        Colors
      </h2>
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-3 cursor-pointer group py-1">
          <input
            onChange={handleChange}
            type="radio"
            value=""
            name="test1"
            className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-black transition-all"
          />
          <span className="text-gray-600 group-hover:text-black text-sm font-medium">
            All Colors
          </span>
        </label>

        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />
        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="#3b82f6"
        />
        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="#ef4444"
        />
        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="#22c55e"
        />
        <Input
          handleChange={handleChange}
          value="white"
          title="white"
          name="test1"
          color="#ffffff"
        />
      </div>
    </div>
  );
};

export default Colors;
