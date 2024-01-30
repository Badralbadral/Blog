export const MostPopular = ({ data }) => {
  return (
    <>
      <div className="w-[1216px] h-[600px]">
        <div className="absolute">
          <img
            src={data[0].cover_image}
            className="border-2 border-black w-[1216px] h-[600px]  rounded-xl"
          />
        </div>
        <div className="relative top-[337px] left-[9px] bg-white w-[598px] h-[252px] rounded-xl p-10 border- border-[1px] border-[#E8E8EA] flex flex-col gap-6">
          <p className="w-[97px] h-7 rounded-md py-1 px-[10px] bg-[#4B6BFB] text-white font-medium text-sm">
            Technology
          </p>
          <h3 className="font-semibold text-3xl text-[#181A2A]">
            {data[0].title}
          </h3>
          <p className="text-[#97989F] font-normal text-base">
            {data[0].readable_publish_date} 2024
          </p>
        </div>
      </div>
      <div>
        <button></button>
        <button></button>
      </div>
    </>
  );
};
