const Hero = () => {
  return (
    <header className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2">
        <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          ✨ New: AI-Powered Tools Available
        </span>
        <h1 className="text-6xl font-extrabold mt-6 leading-tight text-slate-900">
          Supercharge Your <br/> Digital Workflow
        </h1>
        <p className="text-gray-500 mt-6 text-lg max-w-lg leading-relaxed">
          Access premium AI tools, design assets, templates, and productivity software—all in one place.
        </p>
        <div className="mt-8 flex gap-4">
          <button className="btn bg-purple-600 hover:bg-purple-700 text-white rounded-full px-10 border-none">Explore Products</button>
          <button className="btn btn-outline border-purple-600 text-purple-600 hover:bg-purple-50 rounded-full px-10">Watch Demo</button>
        </div>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-end">
        <div className="p-4 border border-emerald-400 rounded-[2rem] bg-gray-50 shadow-sm">
          <img src="/src/assets/banner.png" alt="Hero" className="rounded-2xl max-w-full" />
        </div>
      </div>
    </header>
  );
};
export default Hero;