const Footer = () => {
  return (
    <footer className="bg-[#0a0f1c] text-gray-400 py-16 px-6 md:px-20 font-sans">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-gray-800 pb-12">
        
        <div className="md:col-span-1">
          <h2 className="text-3xl font-bold text-white mb-5">DigiTools</h2>
          <p className="text-sm leading-relaxed max-w-xs">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5 uppercase tracking-wider text-sm">Product</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer transition">Features</li>
            <li className="hover:text-white cursor-pointer transition">Pricing</li>
            <li className="hover:text-white cursor-pointer transition">Templates</li>
            <li className="hover:text-white cursor-pointer transition">Integrations</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5 uppercase tracking-wider text-sm">Company</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer transition">About</li>
            <li className="hover:text-white cursor-pointer transition">Blog</li>
            <li className="hover:text-white cursor-pointer transition">Careers</li>
            <li className="hover:text-white cursor-pointer transition">Press</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5 uppercase tracking-wider text-sm">Resources</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer transition">Documentation</li>
            <li className="hover:text-white cursor-pointer transition">Help Center</li>
            <li className="hover:text-white cursor-pointer transition">Community</li>
            <li className="hover:text-white cursor-pointer transition">Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5 uppercase tracking-wider text-sm">Social Links</h4>
          <div className="flex gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">
              <span className="text-black font-bold text-xs">𝕏</span>
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">
              <span className="text-black font-bold text-xs">f</span>
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">
              <span className="text-black font-bold text-xs">in</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 text-xs">
        <p>© 2026 Digitools. All rights reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition">Terms of Service</span>
          <span className="hover:text-white cursor-pointer transition">Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;