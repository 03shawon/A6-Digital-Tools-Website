
const ProductCard = ({ product, addToCart }) => {
  const { name, description, price, period, tag, tagType, features, icon } = product;
  return (
    <div className="border p-6 rounded-2xl text-left hover:shadow-xl transition relative bg-white">
      <span className={`absolute top-4 right-4 badge badge-${tagType} text-xs py-3`}>{tag}</span>
      <div className="text-4xl mb-4 p-3 bg-gray-50 inline-block rounded-xl">{icon}</div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-500 text-sm my-3">{description}</p>
      <div className="text-2xl font-bold mb-4">${price} <span className="text-sm font-normal text-gray-400">/{period}</span></div>
      <ul className="mb-6 space-y-2">
        {features.map((f, i) => <li key={i} className="text-sm text-gray-600">✅ {f}</li>)}
      </ul>
      <button onClick={() => addToCart(product)} className="btn w-full bg-purple-600 hover:bg-purple-700 text-white border-none rounded-xl">Buy Now</button>
    </div>
  );
};
export default ProductCard;