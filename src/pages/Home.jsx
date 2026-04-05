import { useFilter } from "../context/FilterContext";
import Card from "../components/Card";
import Dashboard from "../layout/Dashboard";

const Home = () => {
  const { products, selectedCategory, query } = useFilter();

  const filteredData = (products, selected, query) => {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredProducts.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()),
      );
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category?.toLowerCase() === selected.toLowerCase() ||
          color?.toLowerCase() === selected.toLowerCase() ||
          company?.toLowerCase() === selected.toLowerCase() ||
          newPrice === selected ||
          title?.toLowerCase() === selected.toLowerCase(),
      );
    }

    return filteredProducts.map((item) => (
      <Card key={Math.random()} {...item} />
    ));
  };

  const result = filteredData(products, selectedCategory, query);

  return (
    <div className="max-w-[1600px] mx-auto">
      <Dashboard />
      <div className="card-container">
        {result.length > 0 ? (
          result
        ) : (
          <div className="col-span-full text-center py-20">
            <h2 className="text-2xl font-bold text-slate-300">
              No Shoes Found!
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
