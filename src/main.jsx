import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FilterProvider } from "./context/FilterContext";
import { CartProvider } from "./context/CartContext";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </StrictMode>,
);
