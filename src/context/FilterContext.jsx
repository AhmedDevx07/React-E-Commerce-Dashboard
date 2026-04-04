import { createContext, useState, useContext } from "react";
import products from "../db/data";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleInputChange = (event) => setQuery(event.target.value);
  const handleChange = (event) => setSelectedCategory(event.target.value);
  const handleClick = (event) => setSelectedCategory(event.target.value);

  return (
    <FilterContext.Provider
      value={{
        query,
        setQuery,
        selectedCategory,
        setSelectedCategory,
        handleInputChange,
        handleChange,
        handleClick,
        products,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
