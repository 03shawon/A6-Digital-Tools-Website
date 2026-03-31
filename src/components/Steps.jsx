const Steps = () => {
  const stepList = [
    { id: "01", title: "Create Account", desc: "Sign up for free in seconds.", icon: <img src="./src/assets/user.png" alt="" /> },
    { id: "02", title: "Choose Products", desc: "Select the tools that fit your needs.", icon: <img src="./src/assets/package.png" alt="" /> },
    { id: "03", title: "Start Creating", desc: "Download and start using immediately.", icon: <img src="./src/assets/rocket.png" alt="" /> }
  ];

  return (
    <section className="bg-gray-50 py-24 text-center px-6">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">Get Started In 3 Steps</h2>
      <p className="text-gray-500 mb-16">Start using premium digital tools in minutes.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {stepList.map((step) => (
          <div key={step.id} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 relative group">
            <span className="absolute top-6 right-6 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">{step.id}</span>
            <div className="text-5xl mb-6 p-6 bg-purple-50 inline-block rounded-3xl text-purple-600">{step.icon}</div>
            <h4 className="text-xl font-bold mb-3">{step.title}</h4>
            <p className="text-gray-500 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Steps;