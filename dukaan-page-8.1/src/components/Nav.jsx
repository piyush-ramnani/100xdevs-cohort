export const Nav = () => {
  return (
    <div className="flex justify-end">
      <div className="flex justify-between items-center w-[1216px] h-[64px] border border-black">
        <div className="w-[360px] flex justify-start items-center border border-purple-500">
          <h1 className="text-l">Payouts </h1>
          <p className="text-gray-600 text-xs">_ ? How it works</p>
        </div>
        <div className="w-[400px] h-[40px] border border-purple-500 flex justify-start items-center bg-[#F2F2F2] text-gray-400 text-xs">
          Search features, tutorials etc
        </div>
        <div className="w-[360px] border border-purple-500 flex justify-end">
          icons
        </div>
      </div>
    </div>
  );
};
