import Link from "next/link";

export const TrendingNews = ({ data }) => {
  return (
    <div className="flex flex-col mt-[100px] mb-[112px] max-[390px]:w-[390px] max-[390px]:mt-10 max-[390px]:px-7">
      <p className="font-bold text-2xl text-[#181A2A] mb-[30px] max-[390px]:font-medium">
        Trending
      </p>
      <div className="flex gap-[30px] max-[390px]:flex-col  max-[390px]:items-center">
        {data.map((e, index) => {
          return (
            <Link key={index} href={`blogs/article/${e.id}`}>
              <div
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
                  <div className="flex gap-2 flex-wra">
                    <p className="mb-4 w-fit h-7 rounded-md py-1 px-[10px] bg-[#4B6BFB] text-white font-medium text-sm ">
                      {e.tag_list[0]}
                    </p>
                    <p className="mb-4 w-fit h-7 rounded-md py-1 px-[10px] bg-[#4B6BFB] text-white font-medium text-sm ">
                      {e.tag_list[1]}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
