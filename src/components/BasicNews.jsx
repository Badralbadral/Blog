export const BasicNews = ({ data }) => {
  return (
    <div>
      <p className="font-bold text-2xl text-[#181A2A] mb-[30px]">Latest News</p>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-3 gap-5">
          {data.map((e, index) => {
            return (
              <div
                key={index}
                className="w-[392px] h-[476px] rounded-xl p-4 border-[1px] border-[0
      #E8E8EA] flex flex-col justify-between gap-4"
              >
                <div className="flex flex-col gap-4">
                  <img
                    src={e.social_image}
                    width={`360px`}
                    className="rounded-md h-[240px]"
                  />
                  <div className="flex flex-wrap gap-1">
                    {e.tag_list.map((e, index) => {
                      return (
                        <p
                          key={index}
                          className="text-[#4B6BFB] text-[13px] font-medium bg-[#4B6BFB] bg-opacity-5 rounded-md py-1 px-[10px] w-fit"
                        >
                          {e}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-col h-full justify-between">
                  <h3 className="font-semibold text-2xl text-[#181A2A]">
                    {e.title}
                  </h3>
                  <p className="font-normal text-base text-[#97989F]">
                    {e.readable_publish_date}{" "}
                    {new Date(data[0].created_at).getFullYear()}
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
