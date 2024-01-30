export const BasicNews = ({ data }) => {
  return (
    <div>
      <p className="font-bold text-2xl text-[#181A2A] mb-[30px]">Latest News</p>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-3 gap-5">
          {data.map((e) => {
            return (
              <div
                className="w-[392px] h-[476px] rounded-xl p-4 border-[1px] border-[0
      #E8E8EA] flex flex-col justify-between gap-4"
              >
                <img
                  src={e.social_image}
                  width={`360px`}
                  className="rounded-md h-[240px]"
                />
                <div className="flex flex-col gap-5">
                  <p>Technology</p>
                  <h3 className="font-semibold text-2xl text-[#181A2A]">
                    {e.title}
                  </h3>
                  <p className="font-normal text-base text-[#97989F]">
                    {e.readable_publish_date} 2024
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <button className="mt-[100px] mb-[100px] flex rounded-md border-[1px] border-[#696A75] border-opacity-35 py-3 px-5 text-[#696A75] font-medium text-base">
          Load More
        </button>
      </div>
    </div>
  );
};
