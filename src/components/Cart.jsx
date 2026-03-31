// 

const Cart = ({ cart, removeItem, checkout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto border-2 border-emerald-400 p-8 rounded-3xl bg-white mt-10">
      <h3 className="text-left font-bold text-xl mb-4">Your Cart</h3>
      {cart.length === 0 ? (
        <div className="py-10"><p className="text-gray-500 italic">Your cart is currently empty.</p></div>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="text-2xl p-2 bg-white rounded-lg">{item.icon}</div>
                <div className="text-left">
                  <h4 className="font-bold">{item.name}</h4>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
              </div>
              <button onClick={() => removeItem(item.id)} className="text-red-500 font-medium hover:underline">Remove</button>
            </div>
          ))}
          <div className="flex justify-between font-bold text-xl border-t pt-4 mt-6">
            <span>Total:</span>
            <span>${total}</span>
          </div>
          <button onClick={checkout} className="btn w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full mt-4 border-none py-3">Proceed To Checkout</button>
        </div>
      )}
    </div>
  );
};
export default Cart;