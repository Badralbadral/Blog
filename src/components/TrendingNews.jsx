import { useEffect, useState } from "react";

export const TrendingNews = () => {
  const [title, setTitle] = useState();
  const [coverImg, setcoverImg] = useState();

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://dev.to/api/articles?top=3&per_page=4"
      );
      const data = await response.json();
      console.log(data);
      setTitle(data[0].title);
      setcoverImg(data[0].cover_image);
    }
    getData();
  }, []);
  return (
    <div className="w-[289px] h-[320px] rounded-xl border-2 border-black p-7 flex flex-col-reverse">
      <div className="absolute"></div>
      <div className="flex flex-col">
        <p className="mb-4 w-[97px] h-7 rounded-md py-1 px-[10px] bg-[#4B6BFB] text-white font-medium text-sm ">
          Technology
        </p>
        <p className="font-base text-md">{title}</p>
      </div>
    </div>
  );
};
