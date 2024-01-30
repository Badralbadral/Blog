export const TrendingNews = ({ data }) => {
  return (
    <div className="flex flex-col mt-[100px] mb-[112px]">
      <p className="font-bold text-2xl text-[#181A2A] mb-[30px]">Trending</p>
      <div className="flex gap-[30px]">
        {data.map((e, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundImage: `url(${e.social_image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "289px",
                height: "320px",
              }}
              className="rounded-xl"
            >
              <div className="flex flex-col-reverse bg-black bg-opacity-20 h-full p-7 rounded-xl">
                <p className="font-base text-md text-white">{e.title}</p>
                <p className="mb-4 w-[97px] h-7 rounded-md py-1 px-[10px] bg-[#4B6BFB] text-white font-medium text-sm ">
                  Technology
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
