import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom"; // useNavigate add kiya redirect ke liye
import { FiChevronLeft } from "react-icons/fi";

const Checkout = () => {
  const { cart, totalPrice, removeFromCart, clearCart } = useCart();
  const [showModal, setShowModal] = useState(false); // Modal state
  const navigate = useNavigate();

  const handlePurchase = () => {
    setShowModal(true); // Modal dikhao

    // 3 second baad cart khali karo aur home par le jao
    setTimeout(() => {
      clearCart();
      navigate("/");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 lg:p-12 relative">
      <div className="max-w-7xl mx-auto mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors font-medium group"
        >
          <FiChevronLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Shopping
        </Link>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Shipping & Payment */}
        <div className="lg:col-span-8 space-y-8">
          <section className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Shipping Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="md:col-span-2 w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <input
                type="text"
                placeholder="Address"
                className="md:col-span-2 w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
          </section>

          <section className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Payment Method
            </h2>
            <div className="space-y-4">
              <label className="flex items-center p-4 bg-slate-50 rounded-xl cursor-pointer border-2 border-transparent hover:border-indigo-500 transition-all">
                <input
                  type="radio"
                  name="payment"
                  className="w-5 h-5 text-indigo-600"
                  defaultChecked
                />
                <span className="ml-4 font-medium text-slate-700">
                  Credit / Debit Card
                </span>
              </label>
              <label className="flex items-center p-4 bg-slate-50 rounded-xl cursor-pointer border-2 border-transparent hover:border-indigo-500 transition-all">
                <input
                  type="radio"
                  name="payment"
                  className="w-5 h-5 text-indigo-600"
                />
                <span className="ml-4 font-medium text-slate-700">
                  Cash on Delivery
                </span>
              </label>
            </div>
          </section>
        </div>

        {/* Right Side: Order Summary */}
        <div className="lg:col-span-4">
          <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100 sticky top-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 mb-8 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
              {cart.length > 0 ? (
                cart.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-20 h-20 bg-slate-50 rounded-2xl p-2 flex-shrink-0">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-slate-800">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500">
                        Qty: {item.quantity}
                      </p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-sm font-bold text-indigo-600">
                          ${item.newPrice}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.title)}
                          className="text-xs text-red-400 hover:text-red-600 transition-colors cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-slate-500 text-center py-4">
                  Your cart is empty
                </p>
              )}
            </div>

            <div className="space-y-4 mb-6 border-t border-slate-50 pt-6">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-800">
                  ${totalPrice}.00
                </span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Shipping</span>
                <span className="font-semibold text-green-600">Free</span>
              </div>
              <div className="border-t border-slate-100 pt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-slate-800">Total</span>
                <span className="text-2xl font-bold text-indigo-600">
                  ${totalPrice}.00
                </span>
              </div>
            </div>

            <button
              onClick={handlePurchase}
              disabled={cart.length === 0}
              className={`w-full py-4 rounded-2xl font-bold text-lg transform active:scale-95 transition-all shadow-lg cursor-pointer
              ${cart.length === 0 ? "bg-slate-300 cursor-not-allowed" : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-100"}`}
            >
              Complete Purchase
            </button>
          </div>
        </div>
      </div>

      {/* Success Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-[3rem] p-10 max-w-sm w-full text-center shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-black text-slate-800 mb-2">
              Success!
            </h2>
            <p className="text-slate-500 font-medium">
              Your order has been placed successfully.
            </p>
            <p className="text-indigo-600 text-sm mt-4 font-bold italic">
              Redirecting to home...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
