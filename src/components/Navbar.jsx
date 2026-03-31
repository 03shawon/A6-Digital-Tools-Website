
const Navbar = ({ count }) => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 sticky top-0 bg-white z-50 shadow-sm">
      <h1 className="text-2xl font-bold text-purple-700">DigiTools</h1>
      <div className="flex items-center gap-6">
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li>Products</li><li>Features</li><li>Pricing</li><li>Testimonials</li><li>FAQ</li>
        </ul>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <span>🛒</span>
            <span className="font-bold">({count})</span>
          </div>
          <button className="text-sm font-bold">Login</button>
          <button className="btn btn-primary bg-purple-600 border-none rounded-full px-6 text-white">Get Started</button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;