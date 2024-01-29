import { useEffect, useState } from "react";

export const MostPopular = () => {
  const [mNewsTitle, setMnewsTitle] = useState();
  const [mNewsImage, setMnewsImage] = useState();
  const [mNewsDate, setMnewsDate] = useState();

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://dev.to/api/articles?top=1&per_page=1"
      );
      const data = await response.json();
      setMnewsTitle(data[0].title);
      setMnewsImage(data[0].social_image);
      setMnewsDate(data[0].readable_publish_date);
    }
    getData();
  }, []);
  return (
    <div className="w-[1216px] h-[600px] rounded-xl border-black ">
      <div className="absolute">
        <img
          src={mNewsImage}
          className="border-2 border-black w-[1216px] h-[600px]"
        />
      </div>
      <div className="relative top-[240px] left-3 bg-white w-[598px] h-[252px] rounded-xl p-10 border- border-[1px] border-[#E8E8EA] flex flex-col gap-6">
        <p className="w-[97px] h-7 rounded-md py-1 px-[10px] bg-[#4B6BFB] text-white font-medium text-sm">
          Technology
        </p>
        <h3 className="font-semibold text-4xl text-[#181A2A]">{mNewsTitle}</h3>
        <p className="text-[#97989F] font-normal text-base">{mNewsDate} 2024</p>
      </div>
    </div>
  );
};
