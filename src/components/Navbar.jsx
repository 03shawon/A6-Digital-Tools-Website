const Navbar = ({ count }) => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 sticky top-0 bg-white z-50 shadow-sm">
      
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-purple-700 font-sans">DigiTools</h1>
      </div>

      <div className="hidden md:flex flex-1 justify-center">
        <ul className="flex gap-6 text-sm font-medium">
          <li className="cursor-pointer hover:text-purple-600 transition">Products</li>
          <li className="cursor-pointer hover:text-purple-600 transition">Features</li>
          <li className="cursor-pointer hover:text-purple-600 transition">Pricing</li>
          <li className="cursor-pointer hover:text-purple-600 transition">Testimonials</li>
          <li className="cursor-pointer hover:text-purple-600 transition">FAQ</li>
        </ul>
      </div>

      <div className="flex flex-1 items-center justify-end gap-4">
        <div className="flex items-center gap-1">
          <span className="text-xl">🛒</span>
          <span className="font-bold text-slate-800">({count})</span>
        </div>
        <button className="text-sm font-bold text-slate-700 hover:text-purple-600 transition">Login</button>
        <button className="btn btn-primary bg-purple-600 hover:bg-purple-700 border-none rounded-full px-6 text-white text-sm">
          Get Started
        </button>
      </div>

    </nav>
  );
};

export default Navbar;