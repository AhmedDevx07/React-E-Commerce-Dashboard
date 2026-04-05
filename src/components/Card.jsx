import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { useCart } from "../context/CartContext";
const Card = ({ img, title, star, reviews, prevPrice, newPrice, item }) => {
  const { addToCart } = useCart();
  return (
    <div className="bg-white rounded-[2.5rem] p-5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(99,102,241,0.15)] transition-all duration-500 group border border-transparent hover:border-indigo-50 flex flex-col h-full">
      {/* Image with Soft Background */}
      <div className="relative aspect-[4/3] rounded-[2rem] bg-slate-50/80 overflow-hidden flex items-center justify-center p-8 mb-4">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-contain group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-indigo-600 shadow-sm border border-indigo-50">
          Exclusive
        </div>
      </div>

      <div className="px-1 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors line-clamp-1">
          {title}
        </h3>

        <div className="flex items-center gap-1.5 mt-1.5">
          <div className="flex text-amber-400 text-sm">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <span className="text-slate-400 text-xs font-semibold">
            {reviews}
          </span>
        </div>

        <div className="flex justify-between items-end mt-auto pt-5">
          <div>
            <p className="text-slate-400 text-xs line-through font-bold mb-0.5">
              ${prevPrice}
            </p>
            <p className="text-2xl font-black text-slate-900 tracking-tight">
              ${newPrice}
            </p>
          </div>
          <button
            onClick={() => {
              // Pura product object khud banayein jo props mein aa raha hai
              const productToAdd = {
                img,
                title,
                star,
                reviews,
                prevPrice,
                newPrice,
              };

              console.log("Adding to cart:", productToAdd);
              addToCart(productToAdd);
            }}
            className="bg-slate-900 text-white p-4 rounded-2xl hover:bg-indigo-600 transition-all shadow-lg cursor-pointer hover:shadow-indigo-200 active:scale-90"
          >
            <FiShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
