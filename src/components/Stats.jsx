const Stats = () => {
  return (
    <div className="bg-purple-600 text-white flex flex-wrap justify-around items-center py-16 px-6">
      <div className="text-center">
        <h3 className="text-5xl font-bold">50K+</h3>
        <p className="text-purple-200 mt-2 font-medium">Active Users</p>
      </div>
      <div className="h-16 w-[1px] bg-purple-400 hidden md:block"></div>
      <div className="text-center">
        <h3 className="text-5xl font-bold">200+</h3>
        <p className="text-purple-200 mt-2 font-medium">Premium Tools</p>
      </div>
      <div className="h-16 w-[1px] bg-purple-400 hidden md:block"></div>
      <div className="text-center">
        <h3 className="text-5xl font-bold">4.9</h3>
        <p className="text-purple-200 mt-2 font-medium">Rating</p>
      </div>
    </div>
  );
};
export default Stats;