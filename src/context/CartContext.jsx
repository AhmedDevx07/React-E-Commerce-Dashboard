import { createContext, useContext, useState, useEffect } from "react";

// Context Create karna
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // LocalStorage se data uthana taake refresh par cart khali na ho
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("sneakx-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Jab bhi cart change ho, usey localStorage mein save karein
  useEffect(() => {
    localStorage.setItem("sneakx-cart", JSON.stringify(cart));
  }, [cart]);

  // 1. Add to Cart (Safe Logic with Error Handling)
  const addToCart = (product) => {
    // Check: Agar product undefined hai ya title nahi hai toh function rook do
    if (!product || !product.title) {
      console.error("Cart Error: Invalid product data received", product);
      return;
    }

    setCart((prevCart) => {
      // Pehle check karein ke kya item pehle se cart mein hai?
      const isItemInCart = prevCart.find(
        (item) => item && item.title === product.title,
      );

      if (isItemInCart) {
        // Agar hai, toh sirf quantity barhao
        return prevCart.map((item) =>
          item.title === product.title
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item,
        );
      }

      // Agar naya item hai, toh quantity 1 set karke add karo
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // 2. Remove from Cart
  const removeFromCart = (productTitle) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.title !== productTitle),
    );
  };

  // 3. Clear Cart (Checkout ke baad ke liye)
  const clearCart = () => {
    setCart([]);
  };

  // 4. Totals Calculate karna
  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 0), 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + Number(item.newPrice) * (item.quantity || 0),
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalPrice,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook use karne ke liye
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
