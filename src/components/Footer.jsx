const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-400 py-20 px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-16">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-3xl font-bold text-white mb-6">DigiTools</h2>
          <p className="text-sm">Premium digital tools for creators and professionals.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Product</h4>
          <ul className="space-y-4 text-sm">
            <li>Features</li><li>Pricing</li><li>Templates</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
            <li>About</li><li>Blog</li><li>Careers</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Social Links</h4>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center cursor-pointer">YT</div>
            <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center cursor-pointer">FB</div>
          </div>
        </div>
      </div>
      <p className="text-center mt-10 text-xs">© 2026 DigiTools. All rights reserved.</p>
    </footer>
  );
};
export default Footer;