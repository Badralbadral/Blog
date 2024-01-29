import { useState, useEffect } from "react";

export const BasicNews = () => {
  const [image, setImage] = useState();
  const [title, settitle] = useState();
  const [date, setdate] = useState();

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://dev.to/api/articles?top=7&per_page=1"
      );
      const data = await response.json();
      console.log(data);
      setImage(data[0].cover_image);
      settitle(data[0].title);
      setdate(data[0].readable_publish_date);
    }
    getData();
  }, []);
  return (
    <div className="w-[392px] h-[476px] rounded-xl p-4 border-[1px] border-black flex flex-col gap-4">
      <img src={image} width={`360px`} className="rounded-md h-[240px]" />
      <div className="flex flex-col gap-5">
        <p>Technology</p>
        <h3 className="font-semibold text-2xl text-[#181A2A]">{title}</h3>
        <p className="font-normal text-base text-[#97989F]">{date} 2024</p>
      </div>
    </div>
  );
};
