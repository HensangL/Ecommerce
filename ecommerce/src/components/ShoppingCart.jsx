import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, clearCart } from "../store/Cart";
import { Products } from "./Products";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrease = (id) => dispatch(increaseQuantity({ productId: id }));
  const handleDecrease = (id) => dispatch(decreaseQuantity({ productId: id }));
  const handleClear = () => dispatch(clearCart());

  const subtotal = cartItems.reduce((total, item) => {
    const product = Products.find((p) => p.id === item.productId);
    return product ? total + product.price * item.quantity : total;
  }, 0);

  const discount = 10; // Example coupon discount
  const total = subtotal - discount;

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-center mb-6">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Table */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="p-3">Product</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Quantity</th>
                    <th className="p-3">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => {
                    const product = Products.find((p) => p.id === item.productId);
                    if (!product) return null;
                    return (
                      <tr key={item.productId} className="border-b">
                        <td className="p-3 flex items-center">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-16 h-16 rounded-md object-cover mr-4"
                          />
                          <span>{product.name}</span>
                        </td>
                        <td className="p-3">${product.price.toFixed(2)}</td>
                        <td className="p-3 flex items-center">
                          <button
                            onClick={() => handleDecrease(item.productId)}
                            className="px-2 py-1 bg-gray-200 rounded"
                          >
                            -
                          </button>
                          <span className="px-3">{item.quantity}</span>
                          <button
                            onClick={() => handleIncrease(item.productId)}
                            className="px-2 py-1 bg-gray-200 rounded"
                          >
                            +
                          </button>
                        </td>
                        <td className="p-3">
                          ${(product.price * item.quantity).toFixed(2)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}

            {/* Coupon + Clear */}
            {cartItems.length > 0 && (
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="border rounded px-3 py-2"
                  />
                  <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                    Apply Coupon
                  </button>
                </div>
                <button
                  onClick={handleClear}
                  className="text-red-600 hover:underline"
                >
                  Clear Shopping Cart
                </button>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Items</span>
                <span>{cartItems.reduce((t, i) => t + i.quantity, 0)}</span>
              </li>
              <li className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </li>
              <li className="flex justify-between">
                <span>Shipping</span>
                <span>$0.00</span>
              </li>
              <li className="flex justify-between">
                <span>Taxes</span>
                <span>$0.00</span>
              </li>
              <li className="flex justify-between">
                <span>Coupon Discount</span>
                <span className="text-red-600">-${discount.toFixed(2)}</span>
              </li>
            </ul>
            <hr className="my-4" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
